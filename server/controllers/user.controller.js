const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models');
const ApiError = require('../error/apiError');

class UserController {
  async registration(req, res) {
    try {
      const { email, password, role } = req.body;
      if (!email || !password) {
        return res.status(403).json(ApiError.badRequest('Incorrect email or password'));
      }

      const isEmail = await User.findOne({ where: { email } });
      if (isEmail) {
        return res
          .status(403)
          .json(ApiError.badRequest('User with that email is already registered'));
      }

      const hashedPassword = await bcrypt.hash(password, 6);
      const user = await User.create({ email, password: hashedPassword, role });
      const backet = await Basket.create({ userId: user.id });
      const token = jwt.sign({ id: user.id, email, role }, process.env.SECRET_KEY, {
        expiresIn: '24h',
      });

      return res.json({ token });
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res.status(500).json(ApiError.internal('User not found'));
      }

      let comparePassword = await bcrypt.compareSync(password, user.password);
      if (!comparePassword) {
        return res.status(500).json(ApiError.internal('Password or email is incorrect'));
      }

      const token = jwt.sign({ id: user.id, email, role }, process.env.SECRET_KEY, {
        expiresIn: '24h',
      });
      return res.json({ token });
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }

  async check(req, res, next) {
    try {
      const token = jwt.sign(req.user.id, req.user.email, req.user.role);

      return res.json({ token });
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }
}

module.exports = new UserController();

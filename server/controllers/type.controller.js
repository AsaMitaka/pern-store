const { Type } = require('../models/models');
const ApiError = require('../error/apiError');

class TypeController {
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(403).json(ApiError.forbidden('Empty type name'));
    }

    try {
      const type = await Type.create({ name });

      return res.json(type);
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }

  async getAll(req, res) {
    try {
      const types = await Type.findAll();

      if (!types) {
        return res.status(404).json(ApiError('Types not found'));
      }

      return res.json(types);
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }
}

module.exports = new TypeController();

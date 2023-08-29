const { Brand } = require('../models/models');
const ApiError = require('../error/apiError');

class BrandController {
  async create(req, res) {
    const { name } = req.body;

    if (!name) {
      return res.status(403).json(ApiError.forbidden('Empty brand name'));
    }

    try {
      const brand = await Brand.create({ name });

      return res.json(brand);
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }

  async getAll(req, res) {
    try {
      const brands = await Brand.findAll();

      if (!brands) {
        return res.status(404).json(ApiError.forbidden('Brands not found'));
      }

      return res.json(brands);
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }
}

module.exports = new BrandController();

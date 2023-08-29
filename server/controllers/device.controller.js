const uuid = require('uuid');
const path = require('path');
const ApiError = require('../error/apiError');
const { Device, DeviceInfo } = require('../models/models');

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;

      if (!img) {
        return res.status(403).json(ApiError.forbidden('Img not found'));
      }

      if (!info) {
        info = JSON.parse(info);
        info.forEach((i) => {
          DeviceInfo.create({ title: i.title, description: i.description, deviceId: device.id });
        });
      }

      let fileName = uuid.v4() + '.jpg';
      img.mv(path.resolve(__dirname, '..', 'static', fileName));

      const device = await Device.create({ name, price, brandId, typeId, img: fileName });

      if (!device) {
        return res.status(403).json(ApiError.forbidden('Device not created'));
      }

      return res.json(device);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    try {
      let { brandId, typeId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 10;
      let offset = page * limit - limit;
      let devices;

      if (!(brandId && typeId)) {
        devices = await Device.findAndCountAll({ limit, offset });
      }

      if (!brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { typeId }, limit, offset });
      }

      if (!typeId && brandId) {
        devices = await Device.findAndCountAll({ where: { brandId }, limit, offset });
      }

      if (brandId && typeId) {
        devices = await Device.findAndCountAll({ where: { brandId, typeId }, limit, offset });
      }

      if (!devices) {
        return res.status(404).json(ApiError.forbidden('Devices not found'));
      }

      return res.json(devices);
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const device = await Device.findOne({
        where: { id: id },
        include: [{ model: DeviceInfo, as: 'info' }],
      });

      if (!device) {
        return res.status(403).json(ApiError.forbidden('Device not found'));
      }

      return res.json(device);
    } catch (error) {
      return res.status(500).json(ApiError.internal(error.message));
    }
  }
}

module.exports = new DeviceController();

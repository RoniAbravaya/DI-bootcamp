// controllers/formController.js
const FormData = require('../models/FormData');

const packingFormData = new FormData('packing');
const helpingFormData = new FormData('helping');
const cookingFormData = new FormData('cooking');

exports.submitPackingForm = async (req, res) => {
  try {
    await packingFormData.insert(req.body);
    res.status(200).json({ message: 'Packing form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.submitHelpingForm = async (req, res) => {
  try {
    await helpingFormData.insert(req.body);
    res.status(200).json({ message: 'Helping form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.submitCookingForm = async (req, res) => {
  try {
    await cookingFormData.insert(req.body);
    res.status(200).json({ message: 'Cooking form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

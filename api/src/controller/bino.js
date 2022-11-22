import Bino from "../model/bino.js";

// get All
export const getAllBino = async (req, res) => {
  try {
    const bino = await Bino.find();
    res.status(200).json({ message: "successfully get are Bino", data: bino });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOneBino = async (req, res) => {
  try {
    const bino = await Bino.findById(req.params.id);
    res.status(200).json({ message: "successfully get are Bino", data: bino });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

export const getBinoFilter = async (req, res) => {
  try {
    let condition = {};
    const {
      Nomi,
      Object,
      Qavatliligi,
      PodezlarSoni,
      HonalarSoni,
      Raqami,
      UmmumiyKvadrati,
      Tip
  } = req.query
  if (Nomi) condition = { ...condition, Nomi }
  if (Object) condition = { ...condition, Object }
  if (Qavatliligi) condition = { ...condition, Qavatliligi }
  if (PodezlarSoni) condition = { ...condition, PodezlarSoni }
  if (HonalarSoni) condition = { ...condition, HonalarSoni }
  if (Raqami) condition = { ...condition, Raqami }
  if (UmmumiyKvadrati) condition = { ...condition, UmmumiyKvadrati }
  const data = await Bino.find(condition)
        return res.status(200).json({
            data
        })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};


// post
export const addNewBino = async (req, res) => {
  try {
    const bino = new Bino({
      Nomi: req.body.Nomi,
      Object: req.body.Object,
      Qavatliligi: req.body.Qavatliligi,
      PodezlarSoni: req.body.PodezlarSoni,
      HonalarSoni: req.body.HonalarSoni,
      Raqami: req.body.Raqami,
      UmmumiyKvadrati: req.body.UmmumiyKvadrati,
      Tip: req.body.Tip,
    });

    await bino.save();
    res.status(200).json({ message: "successfully updatedAt", data: bino });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updateBino = async (req, res) => {
  try {
    const {
      Nomi,
      Object,
      Qavatliligi,
      PodezlarSoni,
      HonalarSoni,
      Raqami,
      UmmumiyKvadrati,
      Tip,
    } = req.body;

    const bino = await Bino.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          Nomi,
          Object,
          Qavatliligi,
          PodezlarSoni,
          HonalarSoni,
          Raqami,
          UmmumiyKvadrati,
          Tip,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!bino) {
      res.status(500).json({
        message: "Is not a Bino",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: bino });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deleteBino = async (req, res) => {
  try {
    await Bino.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

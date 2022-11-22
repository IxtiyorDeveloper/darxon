import Honadon from "../model/honadon.js";

// get All
export const getAllHonadon = async (req, res) => {
  try {
    const honadon = await Honadon.find();
    res
      .status(200)
      .json({ message: "successfully get are Honadon", data: honadon });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

// get
export const getOneHonadon = async (req, res) => {
  try {
    const honadon = await Honadon.findById(req.params.id);
    res
      .status(200)
      .json({ message: "successfully get are Honadon", data: honadon});
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

export const getHonodonFilter = async (req, res) => {
  try {
    let condition = {};
    const {
      Nomi,
      Oshhona,
      MehmonHona,
      Yotohona,
      Balkon,
      Kirish,
      Kvqiymadi,
      UmmumiyMaydon,
      Uyraqami,
      BinoRaqami,
      ObectNomi,
      Etaji,
      Kvnarhi,
      Tip,
      Statuslar
  } = req.query
  if (Nomi) condition = { ...condition, Nomi }
  if (Oshhona) condition = { ...condition, Oshhona }
  if (MehmonHona) condition = { ...condition, MehmonHona }
  if (Yotohona) condition = { ...condition, Yotohona }
  if (Balkon) condition = { ...condition, Balkon }
  if (Kirish) condition = { ...condition, Kirish }
  if (Kvqiymadi) condition = { ...condition, Kvqiymadi }
  if (UmmumiyMaydon) condition = { ...condition, UmmumiyMaydon }
  if (Uyraqami) condition = { ...condition, Uyraqami }
  if (BinoRaqami) condition = { ...condition, BinoRaqami }
  if (ObectNomi) condition = { ...condition, ObectNomi }
  if (Etaji) condition = { ...condition, Etaji }
  if (Kvnarhi) condition = { ...condition, Kvnarhi }
  if (Tip) condition = { ...condition, Tip }
  if (Statuslar) condition = { ...condition, Statuslar }
  const data = await Honadon.find(condition)
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
export const addNewHonadon = async (req, res) => {
  try {
    const honadon = new Honadon({
      Nomi: req.body.Nomi,
      Oshhona: req.body.Oshhona,
      MehmonHona: req.body.MehmonHona,
      Yotohona: req.body.Yotohona,
      Balkon: req.body.Balkon,
      Kirish: req.body.Kirish,
      Kvqiymadi: req.body.Kvqiymadi,
      UmmumiyMaydon: req.body.UmmumiyMaydon,
      Uyraqami: req.body.Uyraqami,
      BinoRaqami: req.body.BinoRaqami,
      ObectNomi: req.body.ObectNomi,
      Etaji: req.body.Etaji,
      Kvnarhi: req.body.Kvnarhi,
      Tip: req.body.Tip,
      Statuslar: req.body.Statuslar,
    });

    await honadon.save();
    res.status(200).json({ message: "successfully updated", data: honadon });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//put
export const updateHonadon = async (req, res) => {
  try {
    const {
      Nomi,
      Oshhona,
      MehmonHona,
      Yotohona,
      Balkon,
      Kirish,
      Kvqiymadi,
      UmmumiyMaydon,
      Uyraqami,
      BinoRaqami,
      ObectNomi,
      Etaji,
      Kvnarhi,
      Tip,
      Statuslar,
    } = req.body;

    const honadon = await Honadon.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          Nomi,
          Oshhona,
          MehmonHona,
          Yotohona,
          Balkon,
          Kirish,
          Kvqiymadi,
          UmmumiyMaydon,
          Uyraqami,
          BinoRaqami,
          ObectNomi,
          Etaji,
          Kvnarhi,
          Tip,
          Statuslar,
        },
      },
      { new: true, useFindAndModify: false }
    );
    if (!honadon) {
      res.status(500).json({
        message: "Is not a honadon",
        data: false,
      });
    } else {
      res.status(200).json({ message: "Successfully updated", data: honadon });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

//delete
export const deleteHonadon = async (req, res) => {
  try {
    await Honadon.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "successfully deleted" });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      data: false,
    });
  }
};

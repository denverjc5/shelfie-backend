module.exports = {
  getBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_bin( { location: req.params.id } )
    .then(bin => res.send(bin))
    .catch(() => res.status(500).send);
  },
  updateBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.update_bin(req.body)
    .then(bin => res.send(bin))
    .catch(() => res.status(500).send);
  },
  createBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.create_bin(req.body)
    .then(() => res.send())
    .catch(() => res.status(500).send);
  },
  removeBin: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.delete_bin({location: req.params.id})
    .then(() => res.send())
    .catch(() => res.status(500).send);
  },
  getShelf: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_shelf({location: `${req.params.id}%`})
    .then(shelf => res.send(shelf))
    .catch(() => res.status(500).send);
  }
}

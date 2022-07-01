class DataController {
    async getData(req, res) {
        try {
            res.status(200).json(
                {
                    "data": 'test'
                }
            )
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

export default new DataController();
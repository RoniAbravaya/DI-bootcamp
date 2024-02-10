const sampleController = {
    publicRoute(req, res) {
        res.send('Public route');
    },
    userProfileRoute(req, res) {
        res.send('User profile route');
    },
    adminPanelRoute(req, res) {
        res.send('Admin panel route');
    }
};

module.exports = sampleController;

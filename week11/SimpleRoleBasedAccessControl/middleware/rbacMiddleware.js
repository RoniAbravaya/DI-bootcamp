const rbacMiddleware = (req, res, next) => {
    // Simulate authentication and assign roles
    const user = { role: 'user' }; // Simulated user
    
    // Define roles and permissions
    const rolePermissions = {
        admin: ['public', 'user-profile', 'admin-panel'],
        user: ['public', 'user-profile']
    };
    
    const requestedRoute = req.path.substring(1); // Remove leading '/'
    const userRole = user.role;
    
    if (rolePermissions[userRole].includes(requestedRoute)) {
        // User has access to the requested route
        next();
    } else {
        // User does not have access to the requested route
        res.status(403).json({ error: 'Access Forbidden' });
    }
};

// module.exports = rbacMiddleware;

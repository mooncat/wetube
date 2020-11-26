// export const join = (req, res) => res.send("Join");
// export const login = (req, res) => res.send("Login");
// export const logout = (req, res) => res.send("Logout");
// export const users = (req, res) => res.send("Users");
// export const userDetail = (req, res) => res.send("User Detail");
// export const editProfile = (req, res) => res.send("Edit Profile");
// export const changePassword = (req, res) => res.send("Change Password");

export const join = (req, res) => res.render("join");
export const login = (req, res) => res.render("login");
export const logout = (req, res) => res.render("logout");
export const userDetail = (req, res) => res.render("userDetail");
export const editProfile = (req, res) => res.render("editProfile");
export const changePassword = (req, res) => res.render("changePassword");
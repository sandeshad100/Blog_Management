export const register = async (req, res, next) => {
  try {
    console.log("Register API Called:");
    const { name, email, password } = req.body;

    console.log(name, email, password);
    // let user = await User.findOne({ email });

    // if (user) return next(new ErrorHandler("User already exists", 400));

    // const hashedPassword = await bcrypt.hash(password, 10);
    // user = await User.create({ name, email, password: hashedPassword });
    // sendCookie(user, res, "Registered Successfully", 201);
  } catch (error) {
    next(error);
  }
};

const db = require("../../db/config");
const Calls = db.calls;
const plivo = require("plivo");

const AUTH_ID = "MANMNMZJUXMTGXNGM3YZ";
const AUTH_TOKEN = "MjgzMzlkMmUwOWZhZTI5MDJmOWU4OTY2Yzk3MTVm";

const CreateCall = async (req, res) => {
  try {
    // Validate request
    if (!req.body.username) {
      res.status(400).send({
        message: "Username can not be empty!",
      });
      return;
    }

    //make call
    const client = new plivo.Client(
      process.env.PLIVO_AUTH_ID,
      process.env.PLIVO_AUTH_TOKEN
    );
    client.calls
      .create(
        "+919975277142", // from
        "+917972998543", // to
        "http://s3.amazonaws.com/static.plivo.com/answer.xml", // answer url
        {
          answerMethod: "GET",
          time_limit: 300, // defaults to 5 minutes now
        }
      )
      .then(
        function (response) {
          console.log(response);
          // Create a Call Model obj
          const call = {
            username: req.body.username,
            user_phone: req.body.user_phone,
            receiver_phone: req.body.receiver_phone,
            duration: req.body.duration,
          };

          // Save Call in the database
          Calls.create(call)
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occurred while saving the call to db.",
              });
            });
        },
        function (err) {
          res.status(400).send({
            message: err.message || "Some problem occured while making call.",
          });
        }
      );
  } catch (err) {
    res.status(400).send({
      message: "Something went wrong!",
    });
    return;
  }
};

module.exports = {
  CreateCall,
};

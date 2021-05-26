const db = require("../../db/config");
const Calls = db.calls;
const plivo = require("plivo");
const apiResponse = require("../../helpers/apiResponse");

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
        req.body.user_phone, // from
        req.body.receiver_phone, // to
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
              return apiResponse.successResponse(res,"Call Success and call details added to db");
            })
            .catch((err) => {
                return apiResponse.successResponse(res,"Call success, but could not make entry to db.");
            });
        },
        function (err) {
          return apiResponse.ErrorResponse(res, 'Something wrong with Plivo Service, could not make call.', 400);
        }
      );
  } catch (err) {
    return apiResponse.ErrorResponse(res, "Something went wrong, please try again.");
  }
};

module.exports = {
  CreateCall,
};

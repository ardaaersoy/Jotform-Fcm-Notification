#!/bin/bash
curl -X POST -H "Authorization: key=AAAAflOBEBI:APA91bFjzv9z1Sq8mHjlFcFC4VgSbXYVQ_1Bsv5pXGI0mZw0omlVI2bmTX50NkgTPPpHvnqbPe7Z2XQNW-9b_d2yl0VFICUZ4K6Ih6Lagzk_pQURqkPtSgVb3-9dDh9mcvMAMYWUZQag" -H "Content-Type: application/json" \
   -d '{
  "data": {
    "notification": {
        "title": "JotForm Notifier",
        "body": "You have a new form submission."
    }
  },
  "to": "eSlY7rSRccM:APA91bE3wKidD_oyqmeRJKz6bKfCjQCZ21hj9OJI8shxilHzQb0tmjQT1K_xp03xc42arTfYT9YTFb6KDH-UJvSrrbNZfxCsdjapwQ8QCwv0bUJt3_l7-qQg7wI08bfGT-h5z8EQ4op_"
}' https://fcm.googleapis.com/fcm/send 
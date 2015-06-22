var aws = require('aws-sdk'),
    sqs;

sqs = new aws.SQS({
  region: 'us-east',
  endpoint: 'http://192.168.59.103:9324',
  accessKeyId: 'keyid',
  secretAccessKey: 'accesskey'
});

sqs.createQueue({ QueueName: 'MyTestQueue' }, function(err, results) {

  console.log('create queue', err, results);

})

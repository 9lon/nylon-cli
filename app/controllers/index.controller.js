exports.index = function (req, res) {
    res.sendfile('./public/index.html');
}
exports.db = function (req, res) {
    req.logger.info("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
    req.jdbc.query("mysql", "SELECT *  FROM  vet_ages", [], function (err, data) {
        console.log(data);
    });



    var u = {
        id: 1333
    };

    if (!req.user) {
        var user = {
            id: 1234,
            name: "somchit",
            email: "somchit.c@nexts-corp.com"
        };

        req.login(user, function (err) {

        });


    } else {
        console.log('is loged');
    }

    console.log(req.ajv);
    var valid = req.ajv.validate('user', u);
    if (!valid) console.log(req.ajv.errorsText());

    req.r.table('session').coerceTo('array').run().then(function (result) {
        console.log(result);
        res.json(result);

    });



}
exports.render = function (req, res) {
    console.log(req.user);
    res.render('index', {
        'title': "Hello",
        'message': "somchit",
        'uname': "somchit@gm.com"
    });
}

exports.push = function (req, res) {
    console.log("Helloxxxx");
    res.pusher([
    "/bower_components/polymer/polymer.html",
    "/bower_components/polymer/polymer-mini.html",
    "/bower_components/polymer/polymer-micro.html",
     "/images/test.jpg",
     "/bower_components/gl-font/fonts/csChatThai/CSChatThaiUI.ttf"
],function(err){
        res.end("");
    })
};


exports.report = function (req, res) {
    //var iReport=req._jvm.import("nylon.report.iReport");
    var datas = [
        {
            name: "somchit",
            surname: "chanudom",
            address: "5/424",
            subject: [{
                name: "test",
                title: "xxxx"
            }],
            exports: [
                "a", "b", "c"
            ]
        },
        {
            name: "somchit",
            surname: "chanudom",
            address: "5/424",
            subject: [{
                name: "test",
                title: "xxxx"
            }]
            ,
            exports: [
                "a", "b", "c"
            ]
        }, {
            name: "somchit",
            surname: "chanudom",
            address: "5/424",
            subject: [{
                name: "test",
                title: "xxxx"
            }]
            ,
            exports: [
                "a", "b", "c"
            ]
        }
    ];
    // for(var i=0;i<1000;i++){
    //  datas[i]= {
    //    name:"somchit",
    //    surname:"chanudom",
    //     address:"5/424"
    // };
    //  }
    var parameters = {

        department: "it"
    };

    var type = req.param("type");
    console.log(type);
    res.ireport("report1.jasper", type, datas, parameters);






    //  var reportname=path.join(path.dirname(fs.realpathSync(__filename)), '../report/report1.jasper');
    // var rp=new iReport();
    // rp.export(reportname,"pdf",JSON.stringify(data),JSON.stringify(parameter),
    //   function(err,buff){
    //   res._responsePDF(buff);
    // var buffer= Buffer.from(buff, "hex");
    // var bufferStream = new stream.PassThrough();
    // bufferStream.end( buffer );
    // res.setHeader('Content-Length', buffer.length);
    //  res.setHeader('Content-Type', 'application/ms-word');
    //     res.setHeader('Content-Disposition', 'attachment; filename=quote.docx');
    // bufferStream.pipe(res);

    // }
    //);



}

function toArrayBuffer(buf) {
    var ab = new ArrayBuffer(buf.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}
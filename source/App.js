enyo.kind({
    name: "App",
    kind: "FittableRows",
    fit: true,
    create: function() {
        this.inherited(arguments);
        enyo.amf.init("amfphp", "server/amf.php");
    },
    components:[
        {kind: "onyx.Toolbar", content: "enyo-amf - AMF 3 JavaScript Client library"},
        {kind: "enyo.Scroller", fit: true, components: [
            {name: "main", classes: "nice-padding", allowHtml: true}
        ]},
        {kind: "onyx.Toolbar", components: [
            {kind: "onyx.Button", content: "Send Request", ontap: "sendRequest"}
        ]}
    ],
    sendRequest: function(inSender, inEvent) {
        this.$.main.addContent("ping<br/>");
        var amfx = new enyo.Amfx({
            source: "test",
            operation: "ping"
        });
        amfx.response(this, "processResponse");
        amfx.error(this, "processError");
        amfx.go([]);
    },
    processResponse: function(inSender, inResponse) {
        this.$.main.addContent(inResponse.data + "<br/>");
    },
    processError: function(inSender, inResponse) {
        this.$.main.addContent(inResponse.data);
    }
});

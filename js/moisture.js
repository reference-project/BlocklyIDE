Blockly.Blocks['moisture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Moisture sensor");
    this.appendValueInput("ID")
        .setCheck("Number")
        .appendField("ID");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://openfpgaduino.github.io/');
  }
};

Blockly.JavaScript['moisture'] = function(block) {
  var id = Blockly.JavaScript.valueToCode(block, 'ID', Blockly.JavaScript.ORDER_ATOMIC);
  var code = 
    "funciton() {"	
    "var url = 'fpga/api/call/am2301_moisture';\n" + 
    "var xhr = new XMLHttpRequest();\n" +
    "var post = ["+ id +"];\n" +
    "xhr.open('post', url, false);\n" + 
    "xhr.setRequestHeader('Content-Type', 'application/json');\n" +
    "return xhr.send(JSON.stringify(post));}"
  return [code, Blockly.JavaScript.ORDER_NONE];
};// JavaScript Document
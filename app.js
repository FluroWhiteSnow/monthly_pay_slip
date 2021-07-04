const { FormatPayslip } = require("./src/FormatPayslip");

function app() {
    runApp = function() {
        let getPayslip = new FormatPayslip()
        getPayslip.runFormat()
    }

    do {
        runApp()
    } while(true)
}

app()
var data = {lines:[
{"lineNum":"    1","line":"open! Core","class":"lineCov","hits":"1","order":"42",},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"type t =","class":"lineCov","hits":"1","order":"44",},
{"lineNum":"    4","line":"  | Left","class":"lineNoCov","hits":"0",},
{"lineNum":"    5","line":"  | Inner"},
{"lineNum":"    6","line":"  | Outer","class":"lineNoCov","hits":"0",},
{"lineNum":"    7","line":"  | As_of of","class":"lineNoCov","hits":"0",},
{"lineNum":"    8","line":"      { strategy : [ `Backward | `Forward | `Nearest ]","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"      ; tolerance : string option","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"      ; left_by : string list option","class":"lineNoCov","hits":"0",},
{"lineNum":"   11","line":"      ; right_by : string list option","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"      }"},
{"lineNum":"   13","line":"  | Cross","class":"lineNoCov","hits":"0",},
{"lineNum":"   14","line":"  | Semi","class":"lineNoCov","hits":"0",},
{"lineNum":"   15","line":"  | Anti","class":"lineNoCov","hits":"0",},
{"lineNum":"   16","line":"[@@deriving compare, sexp]","class":"lineCov","hits":"1","order":"43",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2023-09-23 10:46:05", "instrumented" : 13, "covered" : 3,};
var merged_data = [];

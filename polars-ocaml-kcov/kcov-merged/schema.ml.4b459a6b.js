var data = {lines:[
{"lineNum":"    1","line":"open! Core","class":"lineCov","hits":"1","order":"76",},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"type t"},
{"lineNum":"    4","line":""},
{"lineNum":"    5","line":"external create : (string * Data_type.t) list -> t = \"rust_schema_create\""},
{"lineNum":"    6","line":"external to_fields : t -> (string * Data_type.t) list = \"rust_schema_to_fields\""},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"let sexp_of_t t = to_fields t |> [%sexp_of: (string * Data_type.t) list]","class":"lineCov","hits":"1","order":"1000",},
{"lineNum":"    9","line":"let t_of_sexp sexp = [%of_sexp: (string * Data_type.t) list] sexp |> create","class":"lineCov","hits":"1","order":"77",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2023-09-23 10:46:05", "instrumented" : 3, "covered" : 3,};
var merged_data = [];

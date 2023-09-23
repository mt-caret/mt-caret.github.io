var data = {lines:[
{"lineNum":"    1","line":"open! Core","class":"lineCov","hits":"1","order":"52",},
{"lineNum":"    2","line":""},
{"lineNum":"    3","line":"type t"},
{"lineNum":"    4","line":""},
{"lineNum":"    5","line":"external create : unit -> t = \"rust_sql_context_new\""},
{"lineNum":"    6","line":"external register : t -> name:string -> Lazy_frame.t -> unit = \"rust_sql_context_register\""},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"let create tables =","class":"lineCov","hits":"1","order":"1173",},
{"lineNum":"    9","line":"  let t = create () in","class":"lineCov","hits":"1","order":"1172",},
{"lineNum":"   10","line":"  List.iter tables ~f:(fun (name, lazy_frame) -> register t ~name lazy_frame);","class":"lineCov","hits":"1","order":"1171",},
{"lineNum":"   11","line":"  t"},
{"lineNum":"   12","line":";;"},
{"lineNum":"   13","line":""},
{"lineNum":"   14","line":"external get_tables : t -> string list = \"rust_sql_context_get_tables\""},
{"lineNum":"   15","line":"external unregister : t -> name:string -> unit = \"rust_sql_context_unregister\""},
{"lineNum":"   16","line":""},
{"lineNum":"   17","line":"external execute"},
{"lineNum":"   18","line":"  :  t"},
{"lineNum":"   19","line":"  -> query:string"},
{"lineNum":"   20","line":"  -> (Lazy_frame.t, string) result"},
{"lineNum":"   21","line":"  = \"rust_sql_context_execute\""},
{"lineNum":"   22","line":""},
{"lineNum":"   23","line":"let execute_exn t ~query = execute t ~query |> Utils.string_result_ok_exn","class":"lineCov","hits":"1","order":"53",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2023-09-23 10:46:05", "instrumented" : 5, "covered" : 5,};
var merged_data = [];

var data = {lines:[
{"lineNum":"    1","line":"open! Core","class":"lineCov","hits":"1","order":"48",},
{"lineNum":"    2","line":"open Async"},
{"lineNum":"    3","line":"include Polars.Lazy_frame","class":"lineCov","hits":"1","order":"47",},
{"lineNum":"    4","line":""},
{"lineNum":"    5","line":"let collect ?streaming t = In_thread.run (fun () -> collect ?streaming t)","class":"lineNoCov","hits":"0",},
{"lineNum":"    6","line":"let collect_exn ?streaming t = In_thread.run (fun () -> collect_exn ?streaming t)","class":"lineCov","hits":"1","order":"1570",},
{"lineNum":"    7","line":"let collect_all t = In_thread.run (fun () -> collect_all t)","class":"lineNoCov","hits":"0",},
{"lineNum":"    8","line":"let collect_all_exn ts = In_thread.run (fun () -> collect_all_exn ts)","class":"lineNoCov","hits":"0",},
{"lineNum":"    9","line":"let profile t = In_thread.run (fun () -> profile t)","class":"lineNoCov","hits":"0",},
{"lineNum":"   10","line":"let profile_exn t = In_thread.run (fun () -> profile_exn t)","class":"lineCov","hits":"1","order":"1569",},
{"lineNum":"   11","line":"let fetch t ~n_rows = In_thread.run (fun () -> fetch t ~n_rows)","class":"lineNoCov","hits":"0",},
{"lineNum":"   12","line":"let fetch_exn t ~n_rows = In_thread.run (fun () -> fetch_exn t ~n_rows)","class":"lineCov","hits":"1","order":"49",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "", "date" : "2023-09-23 10:46:05", "instrumented" : 10, "covered" : 5,};
var merged_data = [];

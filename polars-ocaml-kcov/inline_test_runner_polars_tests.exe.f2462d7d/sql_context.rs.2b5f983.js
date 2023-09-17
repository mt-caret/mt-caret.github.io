var data = {lines:[
{"lineNum":"    1","line":"use crate::utils::*;"},
{"lineNum":"    2","line":"use ocaml_interop::{DynBox, OCaml, OCamlList, OCamlRef, ToOCaml};"},
{"lineNum":"    3","line":"use polars::prelude::*;"},
{"lineNum":"    4","line":"use polars_ocaml_macros::ocaml_interop_export;"},
{"lineNum":"    5","line":"use polars_sql::SQLContext;"},
{"lineNum":"    6","line":"use std::cell::RefCell;"},
{"lineNum":"    7","line":"use std::rc::Rc;"},
{"lineNum":"    8","line":""},
{"lineNum":"    9","line":"type PolarsSQLContext = Rc<RefCell<SQLContext>>;"},
{"lineNum":"   10","line":""},
{"lineNum":"   11","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"7",},
{"lineNum":"   12","line":"fn rust_sql_context_new("},
{"lineNum":"   13","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   14","line":"    unit: OCamlRef<()>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   15","line":") -> OCaml<DynBox<PolarsSQLContext>> {"},
{"lineNum":"   16","line":"    let () = unit.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   17","line":"    OCaml::box_value(cr, Rc::new(RefCell::new(SQLContext::new())))","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   18","line":"}"},
{"lineNum":"   19","line":""},
{"lineNum":"   20","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"7",},
{"lineNum":"   21","line":"fn rust_sql_context_get_tables("},
{"lineNum":"   22","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   23","line":"    sql_context: OCamlRef<DynBox<PolarsSQLContext>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   24","line":") -> OCaml<OCamlList<String>> {"},
{"lineNum":"   25","line":"    let Abstract(sql_context) = sql_context.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   26","line":"    let tables = sql_context.borrow().get_tables();","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   27","line":"    tables.to_ocaml(cr)","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   28","line":"}","class":"lineNoCov","hits":"0","possible_hits":"3",},
{"lineNum":"   29","line":""},
{"lineNum":"   30","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"11",},
{"lineNum":"   31","line":"fn rust_sql_context_register("},
{"lineNum":"   32","line":"    cr: &mut &mut OCamlRuntime,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   33","line":"    sql_context: OCamlRef<DynBox<PolarsSQLContext>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   34","line":"    name: OCamlRef<String>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   35","line":"    lf: OCamlRef<DynBox<LazyFrame>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   36","line":") -> OCaml<()> {"},
{"lineNum":"   37","line":"    let Abstract(sql_context) = sql_context.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   38","line":"    let name: String = name.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   39","line":"    let Abstract(lf) = lf.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"   40","line":""},
{"lineNum":"   41","line":"    sql_context.borrow_mut().register(&name, lf);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   42","line":""},
{"lineNum":"   43","line":"    OCaml::unit()","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   44","line":"}","class":"lineNoCov","hits":"0","possible_hits":"5",},
{"lineNum":"   45","line":""},
{"lineNum":"   46","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"8",},
{"lineNum":"   47","line":"fn rust_sql_context_unregister("},
{"lineNum":"   48","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   49","line":"    sql_context: OCamlRef<DynBox<PolarsSQLContext>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   50","line":"    name: OCamlRef<String>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   51","line":") -> OCaml<()> {"},
{"lineNum":"   52","line":"    let Abstract(sql_context) = sql_context.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   53","line":"    let name: String = name.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   54","line":""},
{"lineNum":"   55","line":"    sql_context.borrow_mut().unregister(&name);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   56","line":""},
{"lineNum":"   57","line":"    OCaml::unit()","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   58","line":"}","class":"lineNoCov","hits":"0","possible_hits":"3",},
{"lineNum":"   59","line":""},
{"lineNum":"   60","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"8",},
{"lineNum":"   61","line":"fn rust_sql_context_execute("},
{"lineNum":"   62","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   63","line":"    sql_context: OCamlRef<DynBox<PolarsSQLContext>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   64","line":"    query: OCamlRef<String>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   65","line":") -> OCaml<Result<DynBox<LazyFrame>, String>> {"},
{"lineNum":"   66","line":"    let query: String = query.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   67","line":""},
{"lineNum":"   68","line":"    dyn_box_result!(cr, |sql_context| {","class":"lineNoCov","hits":"0","possible_hits":"4",},
{"lineNum":"   69","line":"        let result = sql_context.borrow_mut().execute(&query);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   70","line":"        result","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   71","line":"    })","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   72","line":"}","class":"lineNoCov","hits":"0","possible_hits":"2",},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "inline_test_runner_polars_tests.exe", "date" : "2023-09-17 15:58:55", "instrumented" : 38, "covered" : 0,};
var merged_data = [];

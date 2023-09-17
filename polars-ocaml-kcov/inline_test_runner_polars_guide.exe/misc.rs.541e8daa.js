var data = {lines:[
{"lineNum":"    1","line":"use crate::utils::PolarsDataType;"},
{"lineNum":"    2","line":"use crate::utils::*;"},
{"lineNum":"    3","line":"use chrono::naive::{NaiveDate, NaiveDateTime};"},
{"lineNum":"    4","line":"use ocaml_interop::{DynBox, OCaml, OCamlInt, OCamlList, OCamlRef, ToOCaml};"},
{"lineNum":"    5","line":"use polars::prelude::*;"},
{"lineNum":"    6","line":"use polars_ocaml_macros::ocaml_interop_export;"},
{"lineNum":"    7","line":""},
{"lineNum":"    8","line":"#[ocaml_interop_export(raise_on_err)]","class":"linePartCov","hits":"10","order":"82","possible_hits":"12",},
{"lineNum":"    9","line":"fn rust_naive_date("},
{"lineNum":"   10","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   11","line":"    year: OCamlRef<OCamlInt>,","class":"lineCov","hits":"1","order":"83","possible_hits":"1",},
{"lineNum":"   12","line":"    month: OCamlRef<OCamlInt>,","class":"lineCov","hits":"1","order":"84","possible_hits":"1",},
{"lineNum":"   13","line":"    day: OCamlRef<OCamlInt>,","class":"lineCov","hits":"1","order":"85","possible_hits":"1",},
{"lineNum":"   14","line":") -> OCaml<Option<DynBox<NaiveDate>>> {"},
{"lineNum":"   15","line":"    let year: i32 = year.to_rust(cr);","class":"lineCov","hits":"1","order":"86","possible_hits":"1",},
{"lineNum":"   16","line":"    let month = month.to_rust::<Coerce<_, i32, u32>>(cr).get()?;","class":"linePartCov","hits":"1","order":"87","possible_hits":"3",},
{"lineNum":"   17","line":"    let day = day.to_rust::<Coerce<_, i32, u32>>(cr).get()?;","class":"linePartCov","hits":"2","order":"95","possible_hits":"4",},
{"lineNum":"   18","line":""},
{"lineNum":"   19","line":"    NaiveDate::from_ymd_opt(year, month, day)","class":"lineCov","hits":"3","order":"96","possible_hits":"3",},
{"lineNum":"   20","line":"        .map(Abstract)"},
{"lineNum":"   21","line":"        .to_ocaml(cr)","class":"lineCov","hits":"1","order":"97","possible_hits":"1",},
{"lineNum":"   22","line":"}"},
{"lineNum":"   23","line":""},
{"lineNum":"   24","line":"#[ocaml_interop_export(raise_on_err)]","class":"linePartCov","hits":"11","order":"98","possible_hits":"13",},
{"lineNum":"   25","line":"fn rust_naive_date_to_naive_datetime("},
{"lineNum":"   26","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   27","line":"    date: OCamlRef<DynBox<NaiveDate>>,","class":"lineCov","hits":"1","order":"99","possible_hits":"1",},
{"lineNum":"   28","line":"    hour: OCamlRef<Option<OCamlInt>>,","class":"lineCov","hits":"1","order":"100","possible_hits":"1",},
{"lineNum":"   29","line":"    min: OCamlRef<Option<OCamlInt>>,","class":"lineCov","hits":"1","order":"101","possible_hits":"1",},
{"lineNum":"   30","line":"    sec: OCamlRef<Option<OCamlInt>>,","class":"lineCov","hits":"1","order":"102","possible_hits":"1",},
{"lineNum":"   31","line":") -> OCaml<Option<DynBox<NaiveDateTime>>> {"},
{"lineNum":"   32","line":"    let Abstract(date) = date.to_rust(cr);","class":"lineCov","hits":"1","order":"103","possible_hits":"1",},
{"lineNum":"   33","line":""},
{"lineNum":"   34","line":"    let hour: u32 = hour","class":"linePartCov","hits":"1","order":"105","possible_hits":"3",},
{"lineNum":"   35","line":"        .to_rust::<Coerce<_, Option<i64>, Option<u32>>>(cr)","class":"lineCov","hits":"1","order":"104","possible_hits":"1",},
{"lineNum":"   36","line":"        .get()?","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   37","line":"        .unwrap_or(0);"},
{"lineNum":"   38","line":"    let min: u32 = min","class":"linePartCov","hits":"1","order":"113","possible_hits":"3",},
{"lineNum":"   39","line":"        .to_rust::<Coerce<_, Option<i64>, Option<u32>>>(cr)","class":"lineCov","hits":"1","order":"112","possible_hits":"1",},
{"lineNum":"   40","line":"        .get()?","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   41","line":"        .unwrap_or(0);"},
{"lineNum":"   42","line":"    let sec: u32 = sec","class":"linePartCov","hits":"1","order":"115","possible_hits":"3",},
{"lineNum":"   43","line":"        .to_rust::<Coerce<_, Option<i64>, Option<u32>>>(cr)","class":"lineCov","hits":"1","order":"114","possible_hits":"1",},
{"lineNum":"   44","line":"        .get()?","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   45","line":"        .unwrap_or(0);"},
{"lineNum":"   46","line":""},
{"lineNum":"   47","line":"    date.and_hms_opt(hour, min, sec).map(Abstract).to_ocaml(cr)","class":"lineCov","hits":"1","order":"116","possible_hits":"1",},
{"lineNum":"   48","line":"}"},
{"lineNum":"   49","line":""},
{"lineNum":"   50","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"8",},
{"lineNum":"   51","line":"fn rust_naive_datetime_to_string("},
{"lineNum":"   52","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   53","line":"    datetime: OCamlRef<DynBox<NaiveDateTime>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   54","line":") -> OCaml<String> {"},
{"lineNum":"   55","line":"    let Abstract(datetime) = datetime.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   56","line":""},
{"lineNum":"   57","line":"    datetime.to_string().to_ocaml(cr)","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"   58","line":"}"},
{"lineNum":"   59","line":""},
{"lineNum":"   60","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"7",},
{"lineNum":"   61","line":"fn rust_time_ns_to_naive_datetime("},
{"lineNum":"   62","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   63","line":"    time_ns: OCamlRef<OCamlInt63>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   64","line":") -> OCaml<Option<DynBox<NaiveDateTime>>> {"},
{"lineNum":"   65","line":"    let OCamlInt63(ns_since_epoch) = time_ns.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   66","line":""},
{"lineNum":"   67","line":"    // We use Euclidean division here instead of the usual div (/) and mod (%)"},
{"lineNum":"   68","line":"    // operations since we need the remainder to be non-negative."},
{"lineNum":"   69","line":"    NaiveDateTime::from_timestamp_opt(","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"   70","line":"        ns_since_epoch.div_euclid(1_000_000_000),","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   71","line":"        ns_since_epoch.rem_euclid(1_000_000_000) as u32,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   72","line":"    )"},
{"lineNum":"   73","line":"    .map(Abstract)"},
{"lineNum":"   74","line":"    .to_ocaml(cr)","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   75","line":"}"},
{"lineNum":"   76","line":""},
{"lineNum":"   77","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"7",},
{"lineNum":"   78","line":"fn rust_naive_datetime_to_timestamp_nanos("},
{"lineNum":"   79","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   80","line":"    datetime: OCamlRef<DynBox<NaiveDateTime>>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   81","line":") -> OCaml<OCamlInt> {"},
{"lineNum":"   82","line":"    let Abstract(datetime) = datetime.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   83","line":""},
{"lineNum":"   84","line":"    datetime.timestamp_nanos().to_ocaml(cr)","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"   85","line":"}"},
{"lineNum":"   86","line":""},
{"lineNum":"   87","line":"#[ocaml_interop_export]","class":"linePartCov","hits":"6","order":"903","possible_hits":"7",},
{"lineNum":"   88","line":"fn rust_schema_create("},
{"lineNum":"   89","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"   90","line":"    fields: OCamlRef<OCamlList<(String, DataType)>>,","class":"lineCov","hits":"1","order":"904","possible_hits":"1",},
{"lineNum":"   91","line":") -> OCaml<DynBox<Schema>> {"},
{"lineNum":"   92","line":"    let fields: Vec<(String, PolarsDataType)> = fields.to_rust(cr);","class":"lineCov","hits":"1","order":"905","possible_hits":"1",},
{"lineNum":"   93","line":"    let schema: Schema = fields","class":"lineCov","hits":"1","order":"906","possible_hits":"1",},
{"lineNum":"   94","line":"        .into_iter()"},
{"lineNum":"   95","line":"        .map(|(name, PolarsDataType(data_type))| Field::new(&name, data_type))","class":"lineCov","hits":"2","order":"907","possible_hits":"2",},
{"lineNum":"   96","line":"        .collect();"},
{"lineNum":"   97","line":"    OCaml::box_value(cr, schema)","class":"lineCov","hits":"1","order":"908","possible_hits":"1",},
{"lineNum":"   98","line":"}"},
{"lineNum":"   99","line":""},
{"lineNum":"  100","line":"#[ocaml_interop_export]","class":"linePartCov","hits":"6","order":"615","possible_hits":"7",},
{"lineNum":"  101","line":"fn rust_schema_to_fields("},
{"lineNum":"  102","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"  103","line":"    schema: OCamlRef<DynBox<Schema>>,","class":"lineCov","hits":"1","order":"616","possible_hits":"1",},
{"lineNum":"  104","line":") -> OCaml<OCamlList<(String, DataType)>> {"},
{"lineNum":"  105","line":"    let Abstract(schema) = schema.to_rust(cr);","class":"lineCov","hits":"1","order":"617","possible_hits":"1",},
{"lineNum":"  106","line":"    let fields: Vec<(String, PolarsDataType)> = schema","class":"lineCov","hits":"2","order":"618","possible_hits":"2",},
{"lineNum":"  107","line":"        .iter_fields()"},
{"lineNum":"  108","line":"        .map(|Field { name, dtype }| (name.to_string(), PolarsDataType(dtype)))","class":"lineCov","hits":"2","order":"619","possible_hits":"2",},
{"lineNum":"  109","line":"        .collect();"},
{"lineNum":"  110","line":"    fields.to_ocaml(cr)","class":"lineCov","hits":"2","order":"620","possible_hits":"2",},
{"lineNum":"  111","line":"}","class":"linePartCov","hits":"1","order":"630","possible_hits":"3",},
{"lineNum":"  112","line":""},
{"lineNum":"  113","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"9",},
{"lineNum":"  114","line":"fn rust_test_panic(cr: &mut &mut OCamlRuntime, error_message: OCamlRef<String>) -> OCaml<()> {","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  115","line":"    let error_message: String = error_message.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  116","line":""},
{"lineNum":"  117","line":"    // We use a meaningless if branch here to get rid of the unreachable"},
{"lineNum":"  118","line":"    // expression warning."},
{"lineNum":"  119","line":"    if true {","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  120","line":"        panic!(\"test panic: {}\", error_message);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  121","line":"    }"},
{"lineNum":"  122","line":""},
{"lineNum":"  123","line":"    OCaml::unit()","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"  124","line":"}","class":"lineNoCov","hits":"0","possible_hits":"2",},
{"lineNum":"  125","line":""},
{"lineNum":"  126","line":"#[ocaml_interop_export]","class":"lineNoCov","hits":"0","possible_hits":"7",},
{"lineNum":"  127","line":"fn rust_test_fill_null_strategy("},
{"lineNum":"  128","line":"    cr: &mut &mut OCamlRuntime,"},
{"lineNum":"  129","line":"    fill_null_strategy: OCamlRef<FillNullStrategy>,","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  130","line":") -> OCaml<FillNullStrategy> {"},
{"lineNum":"  131","line":"    let PolarsFillNullStrategy(fill_null_strategy) = fill_null_strategy.to_rust(cr);","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  132","line":""},
{"lineNum":"  133","line":"    PolarsFillNullStrategy(fill_null_strategy).to_ocaml(cr)","class":"lineNoCov","hits":"0","possible_hits":"1",},
{"lineNum":"  134","line":"}"},
]};
var percent_low = 25;var percent_high = 75;
var header = { "command" : "inline_test_runner_polars_guide.exe", "date" : "2023-09-17 15:58:31", "instrumented" : 64, "covered" : 35,};
var merged_data = [];

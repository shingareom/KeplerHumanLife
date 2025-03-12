// const parse = require("csv-parse");
// const fs = require("fs");

// const result = [];
// fs.createReadStream("planet.csv").on("data", (data) => {
//     result.push(data);
// })
//     .on("error", (e) => {
//         console.log(e);
//     })
//     .on('end', () => {
//         console.log(result);
//         console.log("Done Processing");
//     })



// const { parse } = require("csv-parse");
// const fs = require("fs");

// const result = [];
// fs.createReadStream("planet.csv")
//     .pipe(parse({
//         comment: "#",
//         columns: true
//     }
//     ))
//     .on("data", (data) => {
//         result.push(data);
//     })
//     .on("error", (e) => {
//         console.log(e);
//     })
//     .on('end', () => {
//         console.log(result);
//         console.log("Done Processing");
//     })




// kepid,kepoi_name,kepler_name,koi_disposition,koi_pdisposition,koi_score,koi_fpflag_nt,koi_f
// pflag_ss,koi_fpflag_co,koi_fpflag_ec,koi_period,koi_period_err1,koi_period_err2,koi_time0bk
// ,koi_time0bk_err1,koi_time0bk_err2,koi_impact,koi_impact_err1,koi_impact_err2,koi_duration,
// koi_duration_err1,koi_duration_err2,koi_depth,koi_depth_err1,koi_depth_err2,koi_prad,koi_pr
// ad_err1,koi_prad_err2,koi_teq,koi_teq_err1,koi_teq_err2,koi_insol,koi_insol_err1,koi_insol_
// err2,koi_model_snr,koi_tce_plnt_num,koi_tce_delivname,koi_steff,koi_steff_err1,koi_steff_er
// r2,koi_slogg,koi_slogg_err1,koi_slogg_err2,koi_srad,koi_srad_err1,koi_srad_err2,ra,dec,koi_
// kepmag
// const { parse } = require("csv-parse");
// const fs = require("fs");

// function ishabitable(planet) {  
//     return planet.koi_disposition === "CONFIRMED"
//         && planet.koi_insol > 0.36 && planet.koi_insol < 1.11
//         && planet.koi_prad < 1.6;

// }

// const result = [];
// fs.createReadStream("planet.csv")
//     .pipe(parse({
//         comment: "#",
//         columns: true
//     }
//     ))
//     .on("data", (data) => {
//         if (ishabitable(data)) { result.push(data.koi_insol); }

//     })
//     .on("error", (e) => {
//         console.log(e);
//     })
//     .on('end', () => {
//         console.log(result);
//         console.log("Done Processing");
//     })



const { parse } = require("csv-parse");
const fs = require("fs");

function ishabitable(planet) {
    return planet.koi_disposition === "CONFIRMED"
        && planet.koi_insol > 0.36 && planet.koi_insol < 1.11
        && planet.koi_prad < 1.6;

}

const result = [];
fs.createReadStream("planet.csv")
    .pipe(parse({
        comment: "#",
        columns: true
    }
    ))
    .on("data", (data) => {
        if (ishabitable(data)) { result.push(data); }

    })
    .on("error", (e) => {
        console.log(e);
    })
    .on('end', () => {
        console.log(result.map((pla) => {
            return pla["kepler_name"];
        }));
        console.log("Done Processing");
    })

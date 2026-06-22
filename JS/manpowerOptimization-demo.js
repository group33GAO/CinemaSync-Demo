/* ============================================================
   CinemaSync Demo - Manpower (תקן כוח אדם)
   Mirrors the real system: per-day mode (with ML guest estimate)
   and per-week mode. All computations run locally against the
   mock scheduler / staffing formula in mockData.js.
   ============================================================ */

var dayNames = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
var mlDayGuests = null;

$(document).ready(function () {
    $("#navBranchDisplay").text(DEMO_BRANCH.branchName);

    populateDayDropdown();
    populateWeekDropdown();

    $("#btnModeParams").on("click", showParamsMode);
    $("#btnModeWeek").on("click", showWeekMode);
    $("#btnToggleMatrix").on("click", toggleMatrix);

    $("#btnEstimateDay").on("click", runDayEstimate);
    $("#btnCalcManpower").on("click", runCalculation);
    $("#btnResetManpower").on("click", showForm);

    $("#btnCalcWeek").on("click", runWeekCalculation);
    $("#btnResetWeek").on("click", showWeekForm);

    $(".btn-logout").on("click", doLogout);
});

// ── Mode switching ──────────────────────────────────────────────────────────

function showParamsMode() {
    $("#btnModeParams").removeClass("btn-outline-light").addClass("btn-teal");
    $("#btnModeWeek").removeClass("btn-teal").addClass("btn-outline-light");
    $("#weekSection").addClass("d-none");
    $("#paramsSection").removeClass("d-none");
}

function showWeekMode() {
    $("#btnModeWeek").removeClass("btn-outline-light").addClass("btn-teal");
    $("#btnModeParams").removeClass("btn-teal").addClass("btn-outline-light");
    $("#paramsSection").addClass("d-none");
    $("#weekSection").removeClass("d-none");
}

function toggleMatrix() {
    var card = $("#matrixCard");
    if (card.hasClass("d-none")) {
        card.removeClass("d-none");
        $("#matrixToggleText").text("הסתרת מטריצת החישוב");
    } else {
        card.addClass("d-none");
        $("#matrixToggleText").text("הצגת מטריצת החישוב");
    }
}

// ── Day mode: ML guest estimate ─────────────────────────────────────────────

function runDayEstimate() {
    var selectedDay = $("#dayStart").val();
    if (!selectedDay) {
        showError("בחר יום");
        return;
    }

    setEstimateLoading(true);
    setTimeout(function () {
        var result = mockDayGuests(selectedDay);
        onDayEstimateSuccess(result);
    }, 600);
}

function setEstimateLoading(isLoading) {
    var btn = $("#btnEstimateDay");
    btn.prop("disabled", isLoading);
    if (isLoading) {
        btn.html('<i class="fa-solid fa-spinner fa-spin me-2"></i> מריץ שיבוץ ומחשב...');
    } else {
        btn.html('<i class="fa-solid fa-users me-2"></i> חשב כמות אנשים צפויה ליום הנבחר');
    }
}

function onDayEstimateSuccess(result) {
    setEstimateLoading(false);
    if (!result) {
        showError("התקבלה תשובה לא תקינה.");
        return;
    }
    mlDayGuests = result.dailyGuests;
    $("#mlGuestsValue").text(result.dailyGuests);
    $("#mlGuestsDate").text(formatDayDotMonthFromIso(result.dateIso));
    $("#mlGuestsAvg").html(result.screenings + " הקרנות &nbsp;&nbsp;·&nbsp;&nbsp; ממוצע " + result.avgPerScreening + " צופים להקרנה");
    $("#mlGuestsBox").removeClass("d-none");
}

// ── Day mode: staffing calculation ──────────────────────────────────────────

function runCalculation() {
    var request = {
        baseGuests: (mlDayGuests === null ? 0 : mlDayGuests),
        weather: $("#optWeather").val(),
        events: $("#optEvents").val(),
        isHoliday: $("#optHoliday").is(":checked"),
        isPremiere: $("#optPremiere").is(":checked"),
        isSchoolVacation: $("#optSchoolVacation").is(":checked"),
        isHostedEvent: $("#optHostedEvent").is(":checked")
    };

    $("#btnCalcManpower").prop("disabled", true);
    setTimeout(function () {
        var result = mockCalculateManpower(request);
        onCalculationSuccess(result);
    }, 300);
}

function onCalculationSuccess(result) {
    $("#btnCalcManpower").prop("disabled", false);

    if (!result) {
        showError("התקבלה תשובה לא תקינה.");
        return;
    }

    $("#resultStaffCount").text(result.totalStaff);
    $("#resServiceHost").text(result.serviceHost);
    $("#resViewing").text(result.viewingExperience);
    $("#resSalesReps").text(result.salesReps);
    $("#resUshers").text(result.ushers);

    $("#resultGuestsInfo").text("התקן מבוסס על כ-" + result.estimatedGuests + " אורחים צפויים ביום");

    $("#manpowerFormCard").addClass("d-none");
    $("#manpowerResults").removeClass("d-none");
}

function showForm() {
    $("#manpowerResults").addClass("d-none");
    $("#manpowerFormCard").removeClass("d-none");
}

// ── Week mode ───────────────────────────────────────────────────────────────

function runWeekCalculation() {
    var selectedDate = $("#weekStart").val();
    if (!selectedDate) {
        showError("בחר שבוע");
        return;
    }

    $("#weekFormCard").addClass("d-none");
    $("#weekResults").addClass("d-none");
    $("#weekLoading").removeClass("d-none");

    setTimeout(function () {
        var result = mockCalculateWeek(selectedDate);
        onWeekSuccess(result);
    }, 900);
}

function onWeekSuccess(result) {
    $("#weekLoading").addClass("d-none");

    if (!result || !result.days) {
        showError("התקבלה תשובה לא תקינה.");
        $("#weekFormCard").removeClass("d-none");
        return;
    }

    renderWeekTable(result);
    $("#weekResults").removeClass("d-none");
}

function renderWeekTable(result) {
    var body = $("#weekTableBody");
    body.empty();

    var i;
    for (i = 0; i < result.days.length; i++) {
        var day = result.days[i];
        var dayLabel = dayNames[day.dayIndex] + " · " + formatDayDotMonthFromIso(day.dateIso);

        var row = '<tr>' +
            '<td class="text-end fw-bold">' + dayLabel + '</td>' +
            '<td>' + day.totalGuests + '</td>' +
            '<td>' + day.serviceHost + '</td>' +
            '<td>' + day.viewingExperience + '</td>' +
            '<td>' + day.salesReps + '</td>' +
            '<td>' + day.ushers + '</td>' +
            '<td class="fw-bold text-green">' + day.totalStaff + '</td>' +
        '</tr>';
        body.append(row);
    }

    $("#weekTotalGuests").text(result.weekTotalGuests);
    $("#weekTotalStaff").text(result.weekTotalStaff);
    $("#weekVenueCount").text(result.venueCount);
    $("#weekScreenings").text(result.weekTotalScreenings);
}

function showWeekForm() {
    $("#weekResults").addClass("d-none");
    $("#weekFormCard").removeClass("d-none");
}

// ── Dropdowns ───────────────────────────────────────────────────────────────

function populateDayDropdown() {
    var select = $("#dayStart");
    select.empty();

    var today = new Date();
    var i;
    for (i = 0; i < 15; i++) {
        var d = new Date(today.getTime());
        d.setDate(d.getDate() + i);

        var value = formatDateAsString(d);
        var dateText = dayNames[d.getDay()] + " " + formatDayDotMonth(d);

        var label;
        if (i === 0) label = "היום — " + dateText;
        else if (i === 1) label = "מחר — " + dateText;
        else label = dateText;

        select.append('<option value="' + value + '">' + label + '</option>');
    }
}

function populateWeekDropdown() {
    var select = $("#weekStart");
    select.empty();

    var today = new Date();
    var currentSunday = findSundayOfWeek(today);

    var i;
    for (i = 0; i < 13; i++) {
        var sunday = new Date(currentSunday.getTime());
        sunday.setDate(sunday.getDate() + i * 7);
        var saturday = new Date(sunday.getTime());
        saturday.setDate(saturday.getDate() + 6);

        var value = formatDateAsString(sunday);
        var rangeText = formatDayDotMonth(sunday) + "-" + formatDayDotMonth(saturday) + "." + saturday.getFullYear();

        var label;
        if (i === 0) label = "השבוע הנוכחי — " + rangeText;
        else if (i === 1) label = "השבוע הבא — " + rangeText;
        else label = "בעוד " + i + " שבועות — " + rangeText;

        select.append('<option value="' + value + '">' + label + '</option>');
    }
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function findSundayOfWeek(date) {
    var d = new Date(date.getTime());
    var day = d.getDay();
    d.setDate(d.getDate() - day);
    return d;
}

function formatDayDotMonth(date) {
    var day = String(date.getDate()).padStart(2, "0");
    var month = String(date.getMonth() + 1).padStart(2, "0");
    return day + "." + month;
}

function formatDayDotMonthFromIso(iso) {
    var d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return formatDayDotMonth(d);
}

function formatDateAsString(dateObject) {
    var year = dateObject.getFullYear();
    var month = String(dateObject.getMonth() + 1).padStart(2, "0");
    var day = String(dateObject.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
}

function showError(message) {
    Swal.fire({
        title: "שגיאה",
        text: message,
        icon: "error",
        confirmButtonText: "אישור"
    });
}

function doLogout(e) {
    if (e) e.preventDefault();
    Swal.fire({
        title: "להתנתק מהמערכת?",
        showCancelButton: true,
        confirmButtonText: "כן, התנתק",
        cancelButtonText: "ביטול"
    }).then(function (result) {
        if (result.isConfirmed) {
            sessionStorage.clear();
            window.location.href = "index.html";
        }
    });
}

/* ============================================================
   CinemaSync Demo - Mock Data
   All data is hardcoded. No backend, no API calls.
   ============================================================ */

const HEBREW_DAYS = ["", "ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];

const HEBREW_GENRES = {
    "Action": "אקשן",
    "Adventure": "הרפתקאות",
    "Animation": "אנימציה",
    "Biography": "ביוגרפיה",
    "Comedy": "קומדיה",
    "Crime": "פשע",
    "Documentary": "דוקומנטרי",
    "Drama": "דרמה",
    "Family": "משפחתי",
    "Fantasy": "פנטזיה",
    "History": "היסטוריה",
    "Horror": "אימה",
    "Kids": "ילדים",
    "Live_Shows": "הופעות חיות",
    "Music": "מוזיקה",
    "Musical": "מחזמר",
    "Mystery": "מסתורין",
    "Romance": "רומנטי",
    "Sci-Fi": "מדע בדיוני",
    "Sci_Fi": "מדע בדיוני",
    "Short": "סרט קצר",
    "Sport": "ספורט",
    "Thriller": "מתח",
    "War": "מלחמה",
    "Western": "מערבון"
};

/* ===== User and branch ===== */
const DEMO_USER = {
    fullName: "אורח",
    branchCode: 101
};

const DEMO_BRANCH = {
    branchCode: 101,
    branchName: "הוט סינמה פתח תקווה",
    city: "PetahTikva"
};

/* ===== Venues (real Hot Cinema PetahTikva from DB) ===== */
const DEMO_VENUES = [
    { venueId: 86, branchCode: 101, venueName: "אולם 1", capacity: 194, venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 87, branchCode: 101, venueName: "אולם 2", capacity: 58,  venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 88, branchCode: 101, venueName: "אולם 3", capacity: 89,  venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 89, branchCode: 101, venueName: "אולם 4", capacity: 216, venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 90, branchCode: 101, venueName: "אולם 5", capacity: 84,  venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 91, branchCode: 101, venueName: "אולם 6", capacity: 82,  venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 92, branchCode: 101, venueName: "אולם 7", capacity: 67,  venueType: "Standard", has3D: false, hasAtmos: false, isActive: true },
    { venueId: 93, branchCode: 101, venueName: "אולם 8", capacity: 149, venueType: "Standard", has3D: false, hasAtmos: false, isActive: true }
];

/* ===== Movies (realistic Hot Cinema lineup, mixed tiers) ===== */
const DEMO_MOVIES = [
    // === Opening weekend ===
    {
        edi: "M001", title: "F1: הסרט", originalName: "F1",
        releaseDate: "2026-06-04", length: 156, isDubbed: false, is3D: false,
        genre: "Action, Drama, Sport",
        popularity: 86, imdbRating: 7.5
    },
    {
        edi: "M002", title: "איך לאלף את הדרקון", originalName: "How to Train Your Dragon",
        releaseDate: "2026-06-06", length: 125, isDubbed: true, is3D: false,
        genre: "Family, Adventure, Fantasy",
        popularity: 80, imdbRating: 7.4
    },

    // === Week 2-3 ===
    {
        edi: "M003", title: "28 שנים אחרי", originalName: "28 Years Later",
        releaseDate: "2026-05-28", length: 115, isDubbed: false, is3D: false,
        genre: "Horror, Drama, Thriller",
        popularity: 73, imdbRating: 7.2
    },
    {
        edi: "M004", title: "חומריסטים", originalName: "Materialists",
        releaseDate: "2026-05-30", length: 116, isDubbed: false, is3D: false,
        genre: "Romance, Drama, Comedy",
        popularity: 58, imdbRating: 6.9
    },
    {
        edi: "M005", title: "תוכנית פיניקיה", originalName: "The Phoenician Scheme",
        releaseDate: "2026-05-30", length: 102, isDubbed: false, is3D: false,
        genre: "Comedy, Drama, Adventure",
        popularity: 52, imdbRating: 7.1
    },
    {
        edi: "M006", title: "באלרינה: סרט מעולמו של ג'ון וויק", originalName: "Ballerina",
        releaseDate: "2026-05-23", length: 124, isDubbed: false, is3D: false,
        genre: "Action, Thriller, Crime",
        popularity: 70, imdbRating: 7.0
    },

    // === Israeli films ===
    {
        edi: "M007", title: "שדה מוקשים", originalName: "Minefield",
        releaseDate: "2026-04-25", length: 108, isDubbed: false, is3D: false,
        genre: "Drama, War",
        popularity: 48, imdbRating: 7.3
    },
    {
        edi: "M008", title: "כסאות סדורים", originalName: "Arranged Chairs",
        releaseDate: "2026-05-15", length: 95, isDubbed: false, is3D: false,
        genre: "Comedy, Drama",
        popularity: 51, imdbRating: 6.6
    },

    // === Holdovers (4-8 weeks) ===
    {
        edi: "M009", title: "משימה בלתי אפשרית: הפסיקה הסופית", originalName: "Mission: Impossible – The Final Reckoning",
        releaseDate: "2026-05-09", length: 169, isDubbed: false, is3D: false,
        genre: "Action, Adventure, Thriller",
        popularity: 85, imdbRating: 7.7
    },
    {
        edi: "M010", title: "לילו וסטיץ'", originalName: "Lilo & Stitch",
        releaseDate: "2026-05-09", length: 108, isDubbed: true, is3D: false,
        genre: "Family, Comedy, Adventure",
        popularity: 76, imdbRating: 6.7
    },
    {
        edi: "M011", title: "קראטה קיד: אגדות", originalName: "Karate Kid: Legends",
        releaseDate: "2026-05-16", length: 94, isDubbed: false, is3D: false,
        genre: "Action, Drama, Sport",
        popularity: 60, imdbRating: 6.4
    },
    {
        edi: "M012", title: "כאב אמיתי", originalName: "A Real Pain",
        releaseDate: "2026-05-02", length: 90, isDubbed: false, is3D: false,
        genre: "Drama, Comedy",
        popularity: 55, imdbRating: 7.4
    },

    // === Long-running (9+ weeks) ===
    {
        edi: "M013", title: "חוטאים", originalName: "Sinners",
        releaseDate: "2026-04-04", length: 137, isDubbed: false, is3D: false,
        genre: "Horror, Drama, Mystery",
        popularity: 75, imdbRating: 7.7
    },
    {
        edi: "M014", title: "מיינקראפט: הסרט", originalName: "A Minecraft Movie",
        releaseDate: "2026-03-28", length: 101, isDubbed: true, is3D: false,
        genre: "Family, Adventure, Comedy",
        popularity: 72, imdbRating: 6.0
    },
    {
        edi: "M015", title: "הברוטליסט", originalName: "The Brutalist",
        releaseDate: "2026-04-18", length: 215, isDubbed: false, is3D: false,
        genre: "Drama, Biography, History",
        popularity: 56, imdbRating: 7.8
    }
];

/* ============================================================
   Deterministic pseudo-random based on a seed string.
   Same seed → same value. Used for reproducible jitter.
   ============================================================ */
function seededRandom(seedStr) {
    let hash = 0;
    for (let i = 0; i < seedStr.length; i++) {
        hash = ((hash << 5) - hash) + seedStr.charCodeAt(i);
        hash |= 0;
    }
    const x = Math.sin(hash) * 10000;
    return x - Math.floor(x);
}

function round2(num) {
    return Math.round(num * 100) / 100;
}

/* ============================================================
   Mock prediction: tickets for a given movie + day + hour + venue
   Mimics the kind of patterns the real RF model learned.
   ============================================================ */
function mockPredictTickets(movie, day, hour, venueCapacity) {
    // Base from popularity (5-30)
    let base = 5 + (movie.popularity / 100) * 25;

    // Day multipliers (Israeli convention: 1=Sunday, 7=Saturday)
    const dayMults = [0, 0.85, 0.65, 0.7, 0.78, 0.92, 1.5, 1.4];
    base *= dayMults[day];

    // Hour multipliers (peak ~20:00)
    const hourMults = { 10: 0.45, 12: 0.65, 14: 0.85, 16: 1.0, 18: 1.2, 20: 1.35, 22: 0.95 };
    base *= hourMults[hour] || 1;

    const isWeekend = day === 6 || day === 7;
    const genres = movie.genre.split(",").map(function (g) { return g.trim(); });

    // Genre patterns
    if (genres.indexOf("Family") !== -1 || genres.indexOf("Animation") !== -1) {
        if (hour <= 16) base *= 1.25;
        if (isWeekend) base *= 1.2;
    }
    if (genres.indexOf("Horror") !== -1) {
        if (hour >= 20) base *= 1.5;
        if (hour <= 14) base *= 0.4;
    }
    if (genres.indexOf("Action") !== -1 && isWeekend) base *= 1.12;
    if (genres.indexOf("Drama") !== -1 || genres.indexOf("Biography") !== -1) {
        if (hour >= 14 && hour <= 18 && !isWeekend) base *= 1.18;
    }
    if (genres.indexOf("Musical") !== -1 && isWeekend && hour >= 18) base *= 1.25;

    // Reproducible noise from a seed combining all inputs
    const seed = movie.edi + "_" + day + "_" + hour;
    const noise = (seededRandom(seed) - 0.5) * 6; // ~-3 to +3
    base += noise;

    return Math.max(2, Math.min(venueCapacity, Math.round(base)));
}

/* ============================================================
   Mock SHAP-like factor explanations for a specific prediction.
   Returns top 8 factors by absolute impact.
   ============================================================ */
function mockShapFactors(movie, day, hour, venueCapacity) {
    const isWeekend = day === 6 || day === 7;
    const dayName = HEBREW_DAYS[day];
    const genres = movie.genre.split(",").map(function (g) { return g.trim(); });
    const primaryGenre = genres[0];
    const heGenre = HEBREW_GENRES[primaryGenre] || primaryGenre;

    function pad2(n) { return n < 10 ? "0" + n : String(n); }

    // Deterministic jitter
    const seed = movie.edi + "_" + day + "_" + hour;
    function j(magnitude) { return (seededRandom(seed + "_x") - 0.5) * magnitude; }
    function j2(magnitude) { return (seededRandom(seed + "_y") - 0.5) * magnitude; }
    function j3(magnitude) { return (seededRandom(seed + "_z") - 0.5) * magnitude; }

    const factors = [];

    // Hour
    const hourBase = (hour >= 18 && hour <= 21) ? 2.5 : (hour <= 12 ? -2 : 0.5);
    const hourValue = round2(hourBase + j(1.2));
    factors.push({
        feature: "Hour_int",
        label: "שעה ביום",
        shapValue: hourValue,
        inputValue: hour,
        explanation: hourValue >= 0
            ? "שעת ההקרנה (" + pad2(hour) + ":00) פופולרית בקהל"
            : "שעת ההקרנה (" + pad2(hour) + ":00) פחות אטרקטיבית"
    });

    // Day of week
    const dayBase = isWeekend ? 2.8 : -1.8;
    const dayValue = round2(dayBase + j2(1.5));
    factors.push({
        feature: "Weekday_int",
        label: "יום בשבוע",
        shapValue: dayValue,
        inputValue: day,
        explanation: dayValue >= 0
            ? "יום " + dayName + " הוא יום חזק בקולנוע"
            : "יום " + dayName + " יום שקט יחסית"
    });

    // Weekend
    const wkValue = round2((isWeekend ? 1.8 : -1.2) + j3(0.8));
    factors.push({
        feature: "Is_Weekend_binary",
        label: "סוף שבוע",
        shapValue: wkValue,
        inputValue: isWeekend ? 1 : 0,
        explanation: isWeekend
            ? "סוף שבוע - אנשים פנויים יותר לבילוי"
            : "יום חול - פחות פנאי לקולנוע"
    });

    // Box office (popularity-derived)
    const boxOffice = movie.popularity * 5_000_000;
    const boBase = (movie.popularity - 55) / 12;
    const boValue = round2(boBase + j(1.5));
    factors.push({
        feature: "OMDbBoxOffice_float",
        label: "הכנסות קופה",
        shapValue: boValue,
        inputValue: boxOffice,
        explanation: boValue >= 0
            ? "הכנסות גבוהות ($" + boxOffice.toLocaleString("en-US") + ") - סרט שמושך בעולם"
            : "הכנסות נמוכות ($" + boxOffice.toLocaleString("en-US") + ") - סרט פחות מצליח מסחרית"
    });

    // Primary genre
    const popularGenre = movie.popularity >= 75;
    const genreValue = round2((popularGenre ? 2.2 : -1.4) + j2(1));
    factors.push({
        feature: "Genre_" + primaryGenre,
        label: "ז'אנר " + heGenre,
        shapValue: genreValue,
        inputValue: 1,
        explanation: genreValue >= 0
            ? "ז'אנר " + heGenre + " בדרך כלל מושך הרבה צופים"
            : "ז'אנר " + heGenre + " פחות פופולרי מהממוצע"
    });

    // IMDb rating
    const ratingBase = (movie.imdbRating - 6.5) * 0.8;
    const ratingValue = round2(ratingBase + j3(0.8));
    factors.push({
        feature: "OMDbImdbRating_float",
        label: "דירוג IMDb",
        shapValue: ratingValue,
        inputValue: movie.imdbRating,
        explanation: ratingValue >= 0
            ? "דירוג IMDb " + movie.imdbRating.toFixed(1) + " - הקהל אוהב את הסרט"
            : "דירוג IMDb " + movie.imdbRating.toFixed(1) + " - הקהל פחות מתחבר"
    });

    // Movie week (since release)
    const release = new Date(movie.releaseDate);
    const today = new Date();
    const weeksSince = Math.max(1, Math.floor((today - release) / (7 * 24 * 60 * 60 * 1000)));
    let mwBase;
    if (weeksSince <= 1) mwBase = 3.5;
    else if (weeksSince <= 3) mwBase = 1.5;
    else if (weeksSince <= 6) mwBase = -0.5;
    else mwBase = -2;
    const mwValue = round2(mwBase + j(0.8));
    let mwExplain;
    if (weeksSince <= 1) mwExplain = "שבוע פתיחה - שיא הציפייה והבאז השיווקי";
    else if (weeksSince <= 3) mwExplain = "שבוע " + weeksSince + " - עדיין רלוונטי בתודעת הקהל";
    else mwExplain = "שבוע " + weeksSince + " להקרנה - הקהל פונה לסרטים חדשים";
    factors.push({
        feature: "MovieWeek_int",
        label: "שבוע מתחילת ההקרנה",
        shapValue: mwValue,
        inputValue: weeksSince,
        explanation: mwExplain
    });

    // Length
    const goodLength = movie.length >= 90 && movie.length <= 130;
    const lengthValue = round2((goodLength ? 0.8 : -1.2) + j2(0.7));
    let lengthExplain;
    if (lengthValue >= 0) lengthExplain = "אורך הסרט (" + movie.length + " דק') בטווח האהוב על הקהל";
    else if (movie.length > 130) lengthExplain = "הסרט ארוך (" + movie.length + " דק') - מרתיע חלק מהקהל";
    else lengthExplain = "אורך " + movie.length + " דק' - ניטרלי";
    factors.push({
        feature: "LengthInMinutes_int",
        label: "אורך הסרט",
        shapValue: lengthValue,
        inputValue: movie.length,
        explanation: lengthExplain
    });

    // Cinema - Petah Tikva (matches the demo branch)
    const cinValue = round2(1.2 + j3(0.8));
    factors.push({
        feature: "Cinema_PetahTikva",
        label: "קולנוע פתח תקווה",
        shapValue: cinValue,
        inputValue: 1,
        explanation: cinValue >= 0
            ? "קולנוע פתח תקווה פופולרי בקהל המקומי"
            : "קולנוע פתח תקווה מוכר פחות כרטיסים בממוצע"
    });

    // Dubbed
    if (movie.isDubbed) {
        const dubValue = round2(1.5 + j(0.6));
        factors.push({
            feature: "IsDubbed_binary",
            label: "מדובב",
            shapValue: dubValue,
            inputValue: 1,
            explanation: "סרט מדובב - פונה לילדים ולמשפחות"
        });
    } else {
        const dubValue = round2(-0.6 + j(0.5));
        factors.push({
            feature: "IsDubbed_binary",
            label: "מדובב",
            shapValue: dubValue,
            inputValue: 0,
            explanation: "סרט לא מדובב - מוגבל לקהל קורא כתוביות"
        });
    }

    // Sort by absolute value, take top 8
    factors.sort(function (a, b) {
        return Math.abs(b.shapValue) - Math.abs(a.shapValue);
    });
    return factors.slice(0, 8);
}

/* ============================================================
   Average base prediction (for SHAP "starting point")
   ============================================================ */
const MOCK_BASE_TICKETS = 17.5;

/* ============================================================
   Manpower mock — mirrors the real ManpowerOptimizer.
   Builds a full branch week schedule (all venues × time slots)
   to derive daily/weekly guest totals, then applies the same
   staffing formula the C# server uses.
   ============================================================ */

const MANPOWER_HOURS = [10, 12, 14, 16, 18, 20, 22];

function mockFormatDate(dateObject) {
    var year = dateObject.getFullYear();
    var month = String(dateObject.getMonth() + 1).padStart(2, "0");
    var day = String(dateObject.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
}

// Deterministically pick a movie for a given venue/day/slot.
function mockPickMovie(venueIndex, dayOffset, hourIndex) {
    var idx = (venueIndex * 31 + dayOffset * 7 + hourIndex * 13) % DEMO_MOVIES.length;
    return DEMO_MOVIES[idx];
}

// Schedule a full week for the branch: every active venue runs a movie in
// each time slot. Returns per-day { dayIndex, dateIso, guests, screenings }.
function mockScheduleWeek(weekStartIso) {
    var weekSunday = new Date(weekStartIso + "T00:00:00");
    var days = [];

    for (var d = 0; d < 7; d++) {
        var dayNum = d + 1; // 1=Sunday ... 7=Saturday (Israeli convention)
        var dayDate = new Date(weekSunday.getTime());
        dayDate.setDate(dayDate.getDate() + d);

        var guests = 0;
        var screenings = 0;

        for (var v = 0; v < DEMO_VENUES.length; v++) {
            var venue = DEMO_VENUES[v];
            if (!venue.isActive) continue;
            for (var h = 0; h < MANPOWER_HOURS.length; h++) {
                var movie = mockPickMovie(v, d, h);
                var tickets = mockPredictTickets(movie, dayNum, MANPOWER_HOURS[h], venue.capacity);
                guests += tickets;
                screenings++;
            }
        }

        days.push({
            dayIndex: d,
            dateIso: mockFormatDate(dayDate),
            guests: guests,
            screenings: screenings
        });
    }

    return days;
}

// Predicted guests for a single date (same approach the real GetDayGuests uses).
function mockDayGuests(dateIso) {
    var date = new Date(dateIso + "T00:00:00");
    var dayIndex = date.getDay();
    var weekStart = new Date(date.getTime());
    weekStart.setDate(weekStart.getDate() - dayIndex);

    var days = mockScheduleWeek(mockFormatDate(weekStart));
    var entry = days[dayIndex];
    var avg = entry.screenings > 0 ? Math.round(entry.guests / entry.screenings) : 0;

    return {
        dateIso: dateIso,
        dailyGuests: entry.guests,
        screenings: entry.screenings,
        avgPerScreening: avg
    };
}

function mockCeilDiv(a, b) {
    if (a <= 0) return 0;
    return Math.ceil(a / b);
}

// Mirrors ManpowerOptimizer.StaffForDay.
function mockStaffForDay(dailyGuests) {
    if (dailyGuests < 0) dailyGuests = 0;
    var serviceHost = 1;
    var viewing = 1;
    var salesReps = mockCeilDiv(dailyGuests, 3000);
    var ushers = mockCeilDiv(dailyGuests, 2200);
    if (salesReps < 1) salesReps = 1;
    if (ushers < 1) ushers = 1;

    return {
        estimatedGuests: dailyGuests,
        serviceHost: serviceHost,
        viewingExperience: viewing,
        salesReps: salesReps,
        ushers: ushers,
        totalStaff: serviceHost + viewing + salesReps + ushers
    };
}

// Mirrors ManpowerOptimizer.Calculate + ApplyParameterBumps.
function mockCalculateManpower(req) {
    var dailyGuests = req.baseGuests > 0 ? req.baseGuests : 2000;
    var r = mockStaffForDay(dailyGuests);

    if (req.weather === "rainy") r.ushers += 1;
    if (req.events === "major") r.salesReps += 1;
    if (req.isHoliday) { r.salesReps += 1; r.ushers += 1; }
    if (req.isPremiere) r.serviceHost += 1;
    if (req.isSchoolVacation) { r.salesReps += 1; r.ushers += 1; }
    if (req.isHostedEvent) { r.serviceHost += 1; r.ushers += 1; }

    r.totalStaff = r.serviceHost + r.viewingExperience + r.salesReps + r.ushers;
    r.estimatedGuests = dailyGuests;
    return r;
}

// Mirrors ManpowerOptimizer.CalculateForWeek.
function mockCalculateWeek(weekStartIso) {
    var days = mockScheduleWeek(weekStartIso);
    var activeVenues = 0;
    for (var v = 0; v < DEMO_VENUES.length; v++) {
        if (DEMO_VENUES[v].isActive) activeVenues++;
    }

    var result = {
        days: [],
        weekTotalGuests: 0,
        weekTotalStaff: 0,
        weekTotalScreenings: 0,
        venueCount: activeVenues
    };

    for (var d = 0; d < 7; d++) {
        var staff = mockStaffForDay(days[d].guests);
        result.days.push({
            dayIndex: d,
            dateIso: days[d].dateIso,
            totalGuests: days[d].guests,
            screenings: days[d].screenings,
            serviceHost: staff.serviceHost,
            viewingExperience: staff.viewingExperience,
            salesReps: staff.salesReps,
            ushers: staff.ushers,
            totalStaff: staff.totalStaff
        });
        result.weekTotalGuests += days[d].guests;
        result.weekTotalStaff += staff.totalStaff;
        result.weekTotalScreenings += days[d].screenings;
    }

    return result;
}

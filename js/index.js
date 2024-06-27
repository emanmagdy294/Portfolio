
/* href */
$("a").click(function (e) {
    let aHref = $(e.target).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html , body").animate({ scrollTop: sectionOffset }, 2000);
})

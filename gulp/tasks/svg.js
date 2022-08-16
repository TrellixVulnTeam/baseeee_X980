export const svg = () => {
    return app.gulp.src(`${app.path.src.svgicons}`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "ICONS",
                message: "Error: <%=error.message %>"
            }))
        )
        .pipe(app.gulp.dest(`${app.path.build.images}`));
}
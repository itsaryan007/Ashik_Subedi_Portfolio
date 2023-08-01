self.__BUILD_MANIFEST = function(c) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [],
            fallback: []
        },
        "/": [c, "static/chunks/506-95c309a4d817bb8b.js", "static/chunks/pages/index-4bdb0bec649560df.js"],
        "/_error": ["static/chunks/pages/_error-54de1933a164a1ff.js"],
        "/archive": [c, "static/chunks/pages/archive-443c4086ec3debb0.js"],
        "/og": ["static/chunks/pages/og-a74b920f81d6dcaa.js"],
        sortedPages: ["/", "/_app", "/_error", "/archive", "/og"]
    }
}("static/chunks/664-09cd891ecc3af1d0.js"), self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
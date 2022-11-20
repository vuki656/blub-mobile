module.exports = {
    /** @type { import('@expo/config-types').ExpoConfig } */
    expo: {
        name: "blub",
        slug: "blub",
        entryPoint: "./src/App.tsx",
        version: "1.0.0",
        orientation: "portrait",
        icon: "./assets/images/icon.png",
        scheme: "blub",
        userInterfaceStyle: "automatic",
        extra: {
            apiUrl: "http://192.168.0.15:8080/graphql"
        },
        splash: {
            image: "./assets/images/splash.png",
            resizeMode: "contain",
            backgroundColor: "#ffffff"
        },
        updates: {
            fallbackToCacheTimeout: 0
        },
        assetBundlePatterns: ["**/*"],
        ios: {
            supportsTablet: true
        },
        android: {
            adaptiveIcon: {
                foregroundImage: "./assets/images/adaptive-icon.png",
                backgroundColor: "#ffffff"
            }
        },
        web: {
            favicon: "./assets/images/favicon.png"
        }
    }
}

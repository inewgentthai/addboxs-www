const devProxy: { [key: string]: {} } = {
    "/api": {
        target: "https://api.next.com",
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
    },
};

export default devProxy;

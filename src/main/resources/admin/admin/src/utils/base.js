const base = {
    get() {
        return {
            url : "http://localhost:8080/springbooto97z9/",
            name: "springbooto97z9",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springbooto97z9/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "保密信息学科平台系统"
        } 
    }
}
export default base

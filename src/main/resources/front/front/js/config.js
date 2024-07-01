
var projectName = '保密信息学科平台系统';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '学科动态',
	url: './pages/xuekedongtai/list.html'
}, 
{
	name: '学科资源',
	url: './pages/xuekeziyuan/list.html'
}, 
{
	name: '文献资源',
	url: './pages/wenxianziyuan/list.html'
}, 
{
	name: '社区资源',
	url: './pages/shequziyuan/list.html'
}, 
{
	name: '考研社区',
	url: './pages/kaoyanshequ/list.html'
}, 
{
	name: '军事资讯',
	url: './pages/junshizixun/list.html'
}, 

{
	name: '留言反馈',
	url: './pages/messages/list.html'
}
]

var adminurl =  "http://localhost:8080/springbooto97z9/admin/dist/index.html";

var cartFlag = false

var chatFlag = false




var menu = [{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["查看","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"学科概况","menuJump":"列表","tableName":"xuekegaikuang"}],"menu":"学科概况管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"人才培养","menuJump":"列表","tableName":"rencaipeiyang"}],"menu":"人才培养管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"学科动态","menuJump":"列表","tableName":"xuekedongtai"}],"menu":"学科动态管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"学科资源","menuJump":"列表","tableName":"xuekeziyuan"}],"menu":"学科资源管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"文献资源","menuJump":"列表","tableName":"wenxianziyuan"}],"menu":"文献资源管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"社区资源","menuJump":"列表","tableName":"shequziyuan"}],"menu":"社区资源管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"考研社区","menuJump":"列表","tableName":"kaoyanshequ"}],"menu":"考研社区管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"军事资讯","menuJump":"列表","tableName":"junshizixun"}],"menu":"军事资讯管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"馆藏目录","menuJump":"列表","tableName":"guanzangmulu"}],"menu":"馆藏目录管理"},{"child":[{"buttons":["查看","删除"],"menu":"荐购目录","menuJump":"列表","tableName":"jiangoumulu"}],"menu":"荐购目录管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"征订目录","menuJump":"列表","tableName":"zhengdingmulu"}],"menu":"征订目录管理"},{"child":[{"buttons":["查看","修改","回复","删除"],"menu":"留言板管理","tableName":"messages"}],"menu":"留言板管理"},{"child":[{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学科动态列表","menuJump":"列表","tableName":"xuekedongtai"}],"menu":"学科动态模块"},{"child":[{"buttons":["查看"],"menu":"学科资源列表","menuJump":"列表","tableName":"xuekeziyuan"}],"menu":"学科资源模块"},{"child":[{"buttons":["查看"],"menu":"文献资源列表","menuJump":"列表","tableName":"wenxianziyuan"}],"menu":"文献资源模块"},{"child":[{"buttons":["查看"],"menu":"社区资源列表","menuJump":"列表","tableName":"shequziyuan"}],"menu":"社区资源模块"},{"child":[{"buttons":["查看"],"menu":"考研社区列表","menuJump":"列表","tableName":"kaoyanshequ"}],"menu":"考研社区模块"},{"child":[{"buttons":["查看"],"menu":"军事资讯列表","menuJump":"列表","tableName":"junshizixun"}],"menu":"军事资讯模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"荐购目录","menuJump":"列表","tableName":"jiangoumulu"}],"menu":"荐购目录管理"},{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学科动态列表","menuJump":"列表","tableName":"xuekedongtai"}],"menu":"学科动态模块"},{"child":[{"buttons":["查看"],"menu":"学科资源列表","menuJump":"列表","tableName":"xuekeziyuan"}],"menu":"学科资源模块"},{"child":[{"buttons":["查看"],"menu":"文献资源列表","menuJump":"列表","tableName":"wenxianziyuan"}],"menu":"文献资源模块"},{"child":[{"buttons":["查看"],"menu":"社区资源列表","menuJump":"列表","tableName":"shequziyuan"}],"menu":"社区资源模块"},{"child":[{"buttons":["查看"],"menu":"考研社区列表","menuJump":"列表","tableName":"kaoyanshequ"}],"menu":"考研社区模块"},{"child":[{"buttons":["查看"],"menu":"军事资讯列表","menuJump":"列表","tableName":"junshizixun"}],"menu":"军事资讯模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"学科动态列表","menuJump":"列表","tableName":"xuekedongtai"}],"menu":"学科动态模块"},{"child":[{"buttons":["查看"],"menu":"学科资源列表","menuJump":"列表","tableName":"xuekeziyuan"}],"menu":"学科资源模块"},{"child":[{"buttons":["查看"],"menu":"文献资源列表","menuJump":"列表","tableName":"wenxianziyuan"}],"menu":"文献资源模块"},{"child":[{"buttons":["查看"],"menu":"社区资源列表","menuJump":"列表","tableName":"shequziyuan"}],"menu":"社区资源模块"},{"child":[{"buttons":["查看"],"menu":"考研社区列表","menuJump":"列表","tableName":"kaoyanshequ"}],"menu":"考研社区模块"},{"child":[{"buttons":["查看"],"menu":"军事资讯列表","menuJump":"列表","tableName":"junshizixun"}],"menu":"军事资讯模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"教师","tableName":"jiaoshi"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

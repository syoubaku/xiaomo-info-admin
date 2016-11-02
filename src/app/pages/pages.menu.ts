export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: '主面板',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'tables',
        data: {
          menu: {
            title: '小莫的主页',
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'adminUsers',
            data: {
              menu: {
                title: '权限管理',
              }
            }
          },
          {
            path: 'users',
            data: {
              menu: {
                title: '用户管理',
              }
            }
          },
          {
            path: 'webLinks',
            data: {
              menu: {
                title: '友情链接管理',
              }
            }
          },
        ]
      },
      {
        path: 'editors',
        data: {
          menu: {
            title: '编辑器',
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: '富文本编辑器',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
            title: '图表展示',
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: '图表',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
            title: 'UI特性',
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
                title: '布局',
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
                title: '按钮',
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
                title: '图标',
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
                title: '弹窗',
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
                title: 'Grid',
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
            title: '表单元素',
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
                title: '表单输入',
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
                title: '表单布局',
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: '地图',
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
                title: '谷歌地图',
              }
            }
          }
        ]
      }
    ]
  }
];

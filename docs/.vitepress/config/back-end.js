export const sidebar = [{
    text: '语言',
    items: [{
        text: 'node',
        collapsed: false,
        items: [{
          text: '框架',
          collapsed: false,
          items: [{
            text: 'egg',
            link: '/back-end/language/node/framework/egg/egg',
            items: [
              { text: 'debug', link: '/back-end/language/node/framework/egg/debug' },
            ]
          }, 
          {
            text: 'express',
            link: '/back-end/language/node/framework/express/express',
          },
          ]
        }, ]
      },
      {
        text: 'java',
        link: '/back-end/language/java/java',
      }, {
        text: 'kotlin',
        link: '/back-end/language/kotlin/kotlin',
      },
    ]
  },
  {
    text: '微服务',
    items: [
      { text: 'ZooKeeper', link: '/back-end/microservice/zookeeper/zookeeper' },
    ]
  },

  {
    text: 'nginx',
    items: [
      { text: 'Nginx', link: '/back-end/nginx/nginx' },
      { text: 'openResty', link: '/back-end/nginx/openresty' },
    ]
  },
  {
    text: 'pm2',
    link: '/back-end/pm/index',
    items: [
      { text: 'egg+pm2', link: '/back-end/pm/egg+pm2' },
    ]
  },

  {
    text: 'RabbitMQ',
    link: '/back-end/RabbitMQ/mq',
  },
  {
    text: 'redis',
    link: '/back-end/redis/redis',
  },
  {
    text: 'docker',
    link: '/back-end/docker/docker',
  },
  {
    text: 'CI/CD',
    items: [
      { text: 'Jenkins', link: '/back-end/CI-CD/Jenkins/index' },
      { text: 'gitLab', link: '/back-end/CI-CD/gitLab/index' },
    ]
  },
  {
    text: 'mysql',
    link: '/back-end/mysql/index',
    items: [{
        text: '基础',
        collapsed: true,
        items: [
          { text: 'SQL', link: '/back-end/mysql/SQL/base/index' },
          { text: '查询', link: '/back-end/mysql/SQL/base/DML' },
          { text: '函数', link: '/back-end/mysql/SQL/base/fun' },
          { text: '约束', link: '/back-end/mysql/SQL/base/constraint' },
          { text: '事务', link: '/back-end/mysql/SQL/base/thing' },
        ]
      },
      {
        text: '进阶',
        collapsed: true,
        items: [
          { text: '存储引擎', link: '/back-end/mysql/SQL/middle/index' },
        ]
      },
    ]
  },
]
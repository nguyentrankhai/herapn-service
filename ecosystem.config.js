module.exports = {
  apps: [
    {
      name: 'hera_backend',
      script: 'server.js', // Tên của file chính của ứng dụng
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development',
        PORT: 3001,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 5000,
      },
    },
  ],

  deploy: {
    production: {
      user: 'developer', // Người dùng để kết nối SSH
      host: '192.168.123.123', // Địa chỉ IP hoặc tên miền của máy chủ
      ref: 'origin/main', // Nhánh bạn muốn triển khai
      repo: 'git@github.com:nguyentrankhai/herapn-service.git', // URL repo của dự án
      path: '/home/developer/herapn/server', // Thư mục bạn muốn triển khai ứng dụng vào
      'post-deploy': 'cd ./SourceCode/server && npm install && pm2 reload ecosystem.config.js --env production',
    },
  },
};


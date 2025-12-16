# OpsHealth - Service Dashbaord

Service Dashbaord - is a dashboard which shows the list of services run behind the scene of OpsHealth and show metrics

Development Tech Tools:

- Development Library [React.js](https://reactjs.org)
- Type checking with [TypeScript](https://www.typescriptlang.org)
- Integrate with [Tailwind CSS](https://tailwindcss.com)
- Linter with [ESLint](https://eslint.org) (default ReactJs, Tailwind CSS)
- Code Formatter with [Prettier](https://prettier.io)
- Instant Server start, Optimized Build with [Vite](https://vitejs.dev/)
- For better Commit messages and custom commands [Husky](https://typicode.github.io/husky/)
- For Routing [react-router-dom](https://reactrouter.com/en/main)

## register font-awesome and add package token

```bash
$ npm config set "@fortawesome:registry" https://npm.fontawesome.com/

#Get the "FONT-AWESOME-PACKAGE-TOKEN" from companies font awesome account
$ npm config set "//npm.fontawesome.com/:_authToken" FONT-AWESOME-PACKAGE-TOKEN
```

### Usage

```bash
# install app's dependencies
$ npm install

# copy env
cp .env.sample .env
```

## Theme Configuration

The application supports multiple color themes. You can configure the default theme using the `VITE_DEFAULT_THEME` environment variable.

Available themes:

- `CAFFEINE` (default)
- `AZURE_AMETHYST`
- `TANGERINE`
- `EMERALD`

Example in `.env`:

```bash
VITE_DEFAULT_THEME=CAFFEINE
```

```bash
# serve on port 5173
npm run dev

# build for production
npm run build

# run linter
npm run lint

# fix basic linter errors
npm run lint-fix
```

### Docker

#### Building the Docker Image

The application uses a multi-stage Docker build with Node.js for building and Nginx for serving.
It currently does not use any `.env`. It only uses the `config.json` file at runtime.

```bash
# Build with FontAwesome token (required for private packages)
docker build --build-arg FONTAWESOME_TOKEN=YOUR_FONTAWESOME_TOKEN -t opshealth-ui .
```

**Note:** The FontAwesome token is required during build time if you're using private FontAwesome packages. Set your token using the `--build-arg FONTAWESOME_TOKEN` flag.

#### Runtime Configuration

The application supports runtime configuration through a `config.json` file that can be mounted into the container. This allows you to customize backend endpoints and other settings without rebuilding the Docker image.

##### Config File Mounting

```bash
# Create a config.json file with your runtime settings
cat > config.json <<EOF
{
  "VITE_OAUTH_REDIRECT_URL": "http://localhost:5173/oauth/callback",
  "VITE_STATUS_PAGE_DOMAIN": "",
  "VITE_BACKEND_API_HOST": "http://localhost:8000",
  "VITE_WEB_HOST": "http://localhost:5173",
  "VITE_BACKEND_API_BASE_URL": "/api/v1",
  "VITE_SLACK_CLIENT_ID": "CORRECT_CLIENT_ID_HERE",
  "VITE_ENV_MODE": "DEV",
  "VITE_SLACK_REDIRECT_URI": "https://localhost:5173/slack/callback",
  "VITE_MIXPANEL_TOKEN": "CORRECT_MIXPANEL_TOKEN_HERE",
  "VITE_MIXPANEL_DEBUG": "false"
}
EOF
```

#### Configuration File Format

The `config.json` file supports the following OpsHealth-specific configuration structure:

```json
{
  "VITE_BACKEND_API_BASE_URL": "string - Backend API base URL",
  "VITE_BACKEND_API_HOST": "string - Backend API host",
  "VITE_OAUTH_REDIRECT_URL": "string - OAuth callback URL",
  "VITE_SLACK_REDIRECT_URI": "string - Slack integration callback URL",
  "VITE_WEB_HOST": "string - Web application host",
  "VITE_OPSHEALTH_DOMAIN": "string - OpsHealth domain",
  "VITE_COPYRIGHT_TEXT": "string - Copyright text",
  "VITE_ENV_MODE": "string - Environment mode (development|staging|production)",
  "VITE_SLACK_CLIENT_ID": "string - Slack client ID",
  "VITE_STATUS_PAGE_DOMAIN": "string - Status page domain",
  "VITE_MIXPANEL_TOKEN": "string - Mixpanel token",
  "VITE_MIXPANEL_DEBUG": "string - Mixpanel debug mode (true|false)"
}
```

#### Running with Docker

```bash
# Run with config file mounted to Correct nginx setup
docker run -p 8080:80 \
  -v $(pwd)/config.json:/usr/share/nginx/html/config.json \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf \
  -d --name opshealth-ui opshealth-ui
```

**How it works:**

1. The application loads build-time defaults from environment variables during the Docker build.
2. At runtime, it fetches `/config.json` from the Nginx server. It currently does not use any `.env`.
3. Runtime config values override build-time defaults
4. Configuration changes take effect immediately without requiring a container restart

**Note:** The config file must be accessible at `/config.json` in the Nginx html directory (`/usr/share/nginx/html/config.json`).

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, get the node stuff you need:

```bash
yarn
```

Create `.env.local` file in the project root, copy the contents of `.example.env` and uncomment the API URLs to use a local [skyviewer-api](https://github.com/lsst-epo/skyviewer-api) instance

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Local Development with Embargoed HiPS Data

By default, embargoed survey tiles (e.g. `sv225p11`) are served from a private GCS
bucket (`gs://skyviewer-comcam`) via the authproxy in the cluster. To access these
locally you need a GCP service account key.

### One-time setup

1. **Get the key file** — ask a team admin to generate a key for
   `edc-dev-skyviewer@skyviewer.iam.gserviceaccount.com`:
   ```bash
   gcloud iam service-accounts keys create skyviewer-dev-sa-key.json \
     --iam-account=edc-dev-skyviewer@skyviewer.iam.gserviceaccount.com \
     --project=skyviewer
   ```
   Place `skyviewer-dev-sa-key.json` in the repo root. **Never commit it** — it is
   already covered by `.gitignore` (`*-sa-key.json`).

2. **Start the app via Docker Compose** — the `docker-compose.yml` mounts the key
   and sets `GOOGLE_APPLICATION_CREDENTIALS` automatically:
   ```bash
   docker-compose up
   ```
   The client is available at [http://localhost:3000](http://localhost:3000).

3. **Verify** — navigate to the Explorer page and confirm that `sv225p11/color_gri`
   survey tiles load without 403/404 errors.

> **Tip**: the survey properties file (RA/Dec starting coordinates) is at
> `https://storage.googleapis.com/skyviewer-comcam/hips-data/sv225p11/color_gri/properties`

> **Security**: this key is for local dev only. Rotate/revoke it once a permanent
> solution (ADC / Workload Identity Federation) is in place.


## Development

Lint your code:

```bash
yarn lint
```

Fix your code styles:

```bash
yarn fix
```

## Build

```bash
yarn bs
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

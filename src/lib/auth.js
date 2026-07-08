export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client,
  }),

  trustedOrigins: [
    "http://localhost:3000",
    "https://pixzen-five.vercel.app",
  ],

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  },
});
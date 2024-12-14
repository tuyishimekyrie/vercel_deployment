import ReactMarkdown from 'react-markdown';

const deploymentSteps = `
# Deploying a Frontend Application on Vercel

---

### **Step 1: Prepare Your Project**
1. Ensure your frontend project is ready for deployment. If you are using a framework like React, Next.js, or any static site generator, make sure:
   - Build scripts are defined in the \`package.json\` file (\`npm run build\` or \`yarn build\`).
   - Any environment variables required for the build are configured locally and will be added to Vercel later.

2. Test the project locally to confirm it builds and runs as expected:
   \`\`\`bash
   npm run build
   npm start
   \`\`\`

---

### **Step 2: Create a Vercel Account**
1. Visit [Vercel's website](https://vercel.com/) and sign up/log in with your GitHub, GitLab, or Bitbucket account.

2. Authorize Vercel to access your repositories if deploying directly from a version control system.

---

### **Step 3: Connect Your Repository**
1. In the Vercel dashboard:
   - Click **New Project**.
   - Select the repository containing your frontend code.
   
2. If you're not using version control, you can drag and drop your project folder directly onto the Vercel dashboard.

---

### **Step 4: Configure Project Settings**
1. Review and configure build and output settings:
   - **Framework Preset**: Vercel auto-detects the framework (e.g., React, Next.js). Adjust if needed.
   - **Build Command**: Ensure it matches your \`package.json\` script (\`npm run build\`).
   - **Output Directory**: Set this to the folder where your build is output (e.g., \`build\` for React or \`.next\` for Next.js).

2. Add any required **Environment Variables** in the Vercel settings.

---

### **Step 5: Deploy the Project**
1. Click **Deploy**. Vercel will:
   - Clone your repository.
   - Run the build command.
   - Deploy the output directory.

2. Wait for the deployment process to complete. Vercel will provide you with a unique URL for your deployed app.

---

### **Step 6: Verify Deployment**
1. Visit the generated deployment URL to confirm the app works as expected.

2. If you encounter issues:
   - Check the **build logs** on the Vercel dashboard for errors.
   - Ensure dependencies, scripts, and environment variables are correctly configured.

---

### **Step 7: Configure Custom Domain (Optional)**
1. Add a custom domain in the **Domains** section of the Vercel project settings.
2. Update your DNS records as instructed by Vercel.

---

### **Step 8: Manage Continuous Deployment**
1. For repositories linked to Vercel:
   - Any commit to the default branch (e.g., \`main\`) will trigger an automatic redeployment.
   - Feature branches are also deployed automatically as unique preview URLs.

---


`;

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <ReactMarkdown>{deploymentSteps}</ReactMarkdown>
    </div>
  );
};

export default App;

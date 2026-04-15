export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>J.K. Genesis Mitchell</h1>
      <p>Welcome to my professional portfolio.</p>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Resources</h2>
        <ul>
          <li>
            <a href="/cv.pdf" target="_blank">CV (PDF)</a>
          </li>
          <li>
            <a href="/applied-ai-for-business-syllabus.docx">Applied AI for Business - Syllabus</a>
          </li>
          <li>
            <a href="/ai-for-presentations-syllabus.docx">AI for Presentations - Syllabus</a>
          </li>
          <li>
            <a href="/urban-ai-scholars-program.docx">Urban AI Scholars Program</a>
          </li>
        </ul>
      </section>
      
      <section style={{ marginTop: '2rem' }}>
        <h2>Contact</h2>
        <form action="https://formspree.io/f/your-form-id" method="POST">
          <input 
            type="email" 
            name="email" 
            placeholder="Your email" 
            required 
            style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%' }} 
          />
          <textarea 
            name="message" 
            placeholder="Your message" 
            required 
            style={{ display: 'block', marginBottom: '0.5rem', padding: '0.5rem', width: '100%', minHeight: '150px' }} 
          ></textarea>
          <button 
            type="submit" 
            style={{ padding: '0.5rem 1rem', backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Send
          </button>
        </form>
        <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
          Note: Replace the form action with your Formspree endpoint before going live.
        </p>
      </section>
    </main>
  );
}
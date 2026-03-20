import React, { useState, useEffect } from 'react';
import './Code.css';
import { useSearchParams } from 'react-router-dom';

const BOILERPLATES = {
  javascript: `// JavaScript Boilerplate
function main() {
  console.log("Hello World!");
}
main();`,

  typescript: `// TypeScript Boilerplate
function main(): void {
  console.log("Hello World!");
}
main();`,

  python: `# Python Boilerplate
def main():
    print("Hello World!")

if __name__ == "__main__":
    main()`,

  java: `// Java Boilerplate
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}`,

  cpp: `// C++ Boilerplate
#include <iostream>
int main() {
    std::cout << "Hello World!\\n";
    return 0;
}`,

  c: `// C Boilerplate
#include <stdio.h>
int main() {
    printf("Hello World!\\n");
    return 0;
}`,

  php: `<?php
// PHP Boilerplate
echo "Hello World!";
?>`,

  ruby: `# Ruby Boilerplate
puts "Hello World!"`,

  kotlin: `// Kotlin Boilerplate
fun main() {
    println("Hello World!")
}`
};

const SUPPORTED_LANGUAGES = Object.keys(BOILERPLATES);

function CODEPART() {
  const [searchParams] = useSearchParams();
  const [language, setLanguage] = useState('javascript');
  const [code, setCode] = useState('');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  // 🔄 Update language + code whenever query param changes
  useEffect(() => {
    const queryLang = searchParams.get('lang');
    const validLang = SUPPORTED_LANGUAGES.includes(queryLang) ? queryLang : 'javascript';
    
    setLanguage(validLang);
    setCode(BOILERPLATES[validLang]);
    setOutput('');
    localStorage.setItem('LangOuter', validLang);
  }, [searchParams]);

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    setCode(BOILERPLATES[lang]);
    setOutput('');
    localStorage.setItem('LangOuter', lang);
  };

  const runCode = async () => {
    setIsRunning(true);
    setOutput('Running...');

    try {
      const response = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: language,
          version: getLanguageVersion(language),
          files: [{ content: code }],
          stdin: input
        }),
      });

      const data = await response.json();
      setOutput(data.run.output || data.run.stderr || 'No output');
    } catch (error) {
      setOutput(`Error: ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const getLanguageVersion = (lang) => {
    const versions = {
      javascript: '18.15.0',
      typescript: '5.0.3',
      python: '3.10.0',
      java: '15.0.2',
      cpp: '10.2.0',
      c: '10.2.0',
      php: '8.2.3',
      ruby: '3.0.1',
      kotlin: '1.8.20'
    };
    return versions[lang];
  };

  return (
    <div className="app-container">
      <div className="editor-container">
        <div className="code-panel">
          <div className="toolbar">
            <select
              className="language-select"
              value={language}
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang} value={lang}>
                  {lang.charAt(0).toUpperCase() + lang.slice(1)}
                </option>
              ))}
            </select>
            <button
              className="run-button"
              onClick={runCode}
              disabled={isRunning}
            >
              {isRunning ? 'Running...' : 'Run'}
            </button>
          </div>
          <textarea
            className="code-editor"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            spellCheck="false"
          />
        </div>

        <div className="io-panel">
          <div className="input-output-panel input-panel">
            <div className="panel-header">Input</div>
            <textarea
              className="code-editor"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>
          <div className="input-output-panel output-panel">
            <div className="panel-header">Output</div>
            <textarea
              className="code-editor"
              value={output}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CODEPART;
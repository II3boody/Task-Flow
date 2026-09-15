# Security Policy

## Supported Versions

We support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | ✅ Supported       |
| < 1.0   | ❌ Not Supported   |

## Reporting a Vulnerability

If you discover a security vulnerability in Task Flow, please report it by emailing us directly instead of using the issue tracker.

### How to Report

1. **Do NOT open a public GitHub issue** for the vulnerability
2. **Email us** with the following information:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Any suggested fix (if available)

### Response Timeline

- Initial response: Within 48 hours
- Assessment: Within 5 days
- Fix and disclosure: Within 30 days (depending on severity)

## Security Best Practices

When using Task Flow, please follow these security best practices:

### Local Storage
- Task Flow stores tasks in browser's localStorage
- LocalStorage is cleared only when you manually clear browser data
- Do not store sensitive information in tasks

### Browser Security
- Keep your browser updated to the latest version
- Use HTTPS when accessing the application (if deployed)
- Enable browser security features

### Development
- Always use the latest versions of dependencies
- Review dependencies for known vulnerabilities
- Use `npm audit` regularly to check for issues

## Dependency Security

We use npm's automated security scanning. Dependencies are updated regularly to patch known vulnerabilities.

### Checking Dependencies

```bash
npm audit
npm audit fix  # Automatically fix vulnerabilities
```

## Future Security Considerations

- Backend API integration with authentication
- User authentication and authorization
- Data encryption
- OWASP compliance
- Regular security audits

---

**Thank you for helping us keep Task Flow secure!**

If you have any questions about security, please contact the maintainers.

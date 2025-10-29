'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Mail, Shield, AlertTriangle, Download, Clock } from 'lucide-react'

const DeleteAccountPage: React.FC = () => {
  return (
    <div className="delete-account-page">
      <div className="container">
        {/* Header Section */}
        <div className="page-header">
          <div className="page-icon">
            <Image 
              src="/gc-dark.png" 
              alt="GutCheck Logo" 
              width={80} 
              height={80} 
              className="page-logo"
            />
          </div>
          <h1>Delete Your GutCheck Account</h1>
          <p className="page-subtitle">
            Request Account Deletion
          </p>
        </div>

        {/* Main Content */}
        <div className="content-sections">
          {/* Instructions Section */}
          <section className="content-section">
            <h2>Account Deletion Instructions</h2>
            <p className="section-intro">
              To delete your GutCheck account and associated data, please follow these steps:
            </p>
            
            <div className="steps-container">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Open the GutCheck app</h3>
                  <p>on your device</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Go to Settings</h3>
                  <p>(gear icon in the bottom navigation)</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Scroll down</h3>
                  <p>to find &quot;Account Management&quot; section</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Tap &quot;Delete Account&quot;</h3>
                  <p>button</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Enter your PIN</h3>
                  <p>to confirm deletion</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">6</div>
                <div className="step-content">
                  <h3>Tap &quot;Confirm Deletion&quot;</h3>
                  <p>to permanently delete your account</p>
                </div>
              </div>
            </div>

            <div className="alternative-method">
              <h3>Alternative Method</h3>
              <p>
                If you cannot access the app, email us at: 
                <a href="mailto:support@gutcheck.org" className="email-link">
                  support@gutcheck.org
                </a> 
                with your username and request for account deletion.
              </p>
            </div>
          </section>

          {/* Data Deletion Information */}
          <section className="content-section">
            <h2>Data Deletion Information</h2>
            
            <div className="data-info-grid">
              <div className="data-card delete-card">
                <div className="data-icon">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <h3>What Gets Deleted</h3>
                <ul>
                  <li>Your user profile and account information</li>
                  <li>All chat conversations and analysis history</li>
                  <li>Personal data (age, region, preferences)</li>
                  <li>Anonymous username and associated data</li>
                </ul>
              </div>

              <div className="data-card retain-card">
                <div className="data-icon">
                  <Shield className="w-6 h-6" />
                </div>
                <h3>What Gets Retained</h3>
                <ul>
                  <li>Aggregated, anonymized usage statistics (for app improvement)</li>
                  <li>Data required for legal compliance (if applicable)</li>
                </ul>
              </div>
            </div>

            <div className="retention-info">
              <div className="retention-icon">
                <Clock className="w-5 h-5" />
              </div>
              <div className="retention-content">
                <h3>Retention Period</h3>
                <ul>
                  <li>Account deletion is processed immediately</li>
                  <li>Some anonymized data may be retained for up to 30 days for technical purposes</li>
                  <li>After 30 days, all personal data is permanently removed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="content-section">
            <h2>Contact Information</h2>
            
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">
                  <Mail className="w-6 h-6" />
                </div>
                <h3>For Account Deletion Support</h3>
                <p>Email: <a href="mailto:support@gutcheck.org" className="email-link">support@gutcheck.org</a></p>
                <p className="response-time">Response time: Within 48 hours</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">
                  <Shield className="w-6 h-6" />
                </div>
                <h3>For Privacy Questions</h3>
                <p>Email: <a href="mailto:privacy@gutcheck.org" className="email-link">privacy@gutcheck.org</a></p>
              </div>
            </div>
          </section>

          {/* Important Notes */}
          <section className="content-section important-notes">
            <h2>Important Notes</h2>
            
            <div className="notes-list">
              <div className="note-item">
                <AlertTriangle className="w-5 h-5 note-icon" />
                <p><strong>Account deletion is permanent</strong> and cannot be undone</p>
              </div>
              
              <div className="note-item">
                <Download className="w-5 h-5 note-icon" />
                <p><strong>Download your data</strong> before deletion if you want to keep any information</p>
              </div>
              
              <div className="note-item">
                <Shield className="w-5 h-5 note-icon" />
                <p><strong>Anonymous users</strong> can simply uninstall the app (no account to delete)</p>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="action-buttons">
            <Button className="btn-primary" onClick={() => window.open('mailto:support@gutcheck.org', '_blank')}>
              Contact Support
            </Button>
            <Button variant="outline" className="btn-secondary" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeleteAccountPage

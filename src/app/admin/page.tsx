import React from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { submitPost } from './actions';
import styles from './page.module.css';

export default function AdminPage() {
  return (
    <main className="container section">
      <div className={`${styles.hero} hero`}>
        <h1 className="fs-section">Create New Analysis</h1>
        <p className={`fs-body ${styles.heroDescription}`}>
          Draft a new professional insight or technical analysis.
        </p>
      </div>

      <div className={`glass ${styles.formContainer}`}>
        <form action={submitPost} className={styles.form}>
          <Input label="Title" name="title" id="title" placeholder="Analysis Title" required />
          <Input label="Slug" name="slug" id="slug" placeholder="analysis-slug" required />
          <Textarea label="Content" name="content" id="content" placeholder="Analysis content goes here..." required />
          
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" name="published" id="published" className={styles.checkbox} />
            <label htmlFor="published" className={styles.checkboxLabel}>
              Publish immediately
            </label>
          </div>

          <div className={styles.actions}>
            <Button type="submit" className="button--primary">
              Create Analysis
            </Button>
            <Button type="button" className="button--outline" href="/">
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </main>
  );
}

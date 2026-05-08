import React from 'react';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';
import { submitPost } from './actions';
import styles from './page.module.css';

export default function AdminPage() {
  return (
    <main className="container section">
      <h1 className="fs-section" style={{ marginBottom: '3.2rem' }}>
        Create New Post
      </h1>
      <form action={submitPost} className={styles.form}>
        <Input label="Title" name="title" id="title" placeholder="Enter post title" required />
        <Input label="Slug" name="slug" id="slug" placeholder="enter-post-slug" required />
        <Textarea label="Content" name="content" id="content" placeholder="Write your post content here..." required />
        
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" name="published" id="published" className={styles.checkbox} />
          <label htmlFor="published" className={styles.checkboxLabel}>
            Publish immediately
          </label>
        </div>

        <div className={styles.actions}>
          <Button type="submit" variant="primary">
            Create Post
          </Button>
          <Button type="button" variant="outline" href="/">
            Cancel
          </Button>
        </div>
      </form>
    </main>
  );
}

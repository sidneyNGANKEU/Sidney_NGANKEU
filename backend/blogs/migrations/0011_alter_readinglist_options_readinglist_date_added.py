# Generated by Django 4.1.4 on 2023-02-15 19:53

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('blogs', '0010_alter_blog_cover_image'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='readinglist',
            options={'ordering': ('-date_added',)},
        ),
        migrations.AddField(
            model_name='readinglist',
            name='date_added',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
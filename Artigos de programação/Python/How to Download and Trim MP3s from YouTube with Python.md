  ![How to Download and Trim MP3s from YouTube with Python](https://www.freecodecamp.org/news/content/images/size/w2000/2022/12/pexels-pixabay-164821.jpg)

Everybody's different, but I believe that nearly all of us enjoy listening to music.

If you want to keep a local version of audio streams you often listen to, you'll need to download these files. Sometimes you'll also want to clip a portion of this audio file instead of having only the whole thing available.

You can develop a Python script to do exactly these things. You can also extend it with additional functionality if you'd like. And I'll show you how to do it in this tutorial.

## A Note on Copyrights

If you've used the internet before, you're likely aware that copyright issues can make a lot of people upset – on both sides of a debate about how free content should be.

[The very library we'll use has had its share of copyright troubles](https://github.blog/2020-11-16-standing-up-for-developers-youtube-dl-is-back/).

Thankfully, there is copyright-free material available for us to both enjoy and play with in our programs. So we'll use the royalty-free [Beethoven's 4th Movement of the 9th Symphony](https://www.youtube.com/watch?v=8OAPLk20epo) audio piece in this tutorial.

This guide assumes you'll use the following methods to download copyright-free material as well. Don't use this information to infringe on any copyrights!

## What We'll Do in This Tutorial

First we're going to install the basic dependency, FFMPEG. Then we'll install the `youtube-dl` library (which also works with Vimeo and many other platforms) to download audio from a YouTube URL and use it on Python code.

Next, we'll download the `pydub` library to trim audio files and implement this functionality in our code.

Finally, we'll create some friendly user interface so we can reuse this script later without having to edit the code.

This will all be executed inside a `main()` function so we can separate functionality, implementation, and use.

## How to Install the FFMPEG Package

This package is at the core of many multimedia programs (and all of the open-source ones I've used so far). We are going to need it for both of the Python libraries we'll install very soon.

### How to Install on Linux

If you are on a Debian-based machine (such as Ubuntu or Kali), here's the command to install FFMPEG:

    sudo apt-get install ffmpeg

If you are using other kinds of distributions, install instructions are [here](https://ffmpeg.org/download.html).

### How to Install on Windows

First, install the [Chocolatey Package Manager](https://chocolatey.org/how-chocolatey-works). Install instructions are [here](https://chocolatey.org/install), I'll be waiting.

Once you've properly installed chocolatey (if you didn't have it already), download the package from an **administrative instance of Powershell**:

    choco install ffmpeg
    

### How to Install on Mac

If you don't have it already, [install homebrew](https://brew.sh/). Then, in a terminal:

    brew install ffmpeg

## How to Programmatically Download Audio from YouTube URLs

First of all, download the youtube-dl package from pip. It's [one of the most starred on GitHub](https://github.com/ytdl-org/youtube-dl).

`pip install youtube-dl`

We're going to import this module and then declare a function that downloads the audio in mp3 format with reasonable quality from a YouTube URL.

    import youtube_dl # client to many multimedia portals
    
    # downloads yt_url to the same directory from which the script runs
    def download_audio(yt_url):
        ydl_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
        }
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([yt_url])
    
    def main():
        yt_url = "https://www.youtube.com/watch?v=8OAPLk20epo"
        download_audio(yt_url)
    
    main()
    

The `.download()` method will gradually download the audio stream as a `.webm` file. Once it detects that the whole file is available, it will use `ffmpeg` to convert it to an MP3 audio file. This means that if something happens, say the internet connection goes down when the file is 90% downloaded, it'll resume download at 90% instead of from the beginning – pretty neat.

Note that if you already have the mp3 file downloaded, the download will restart and overwrite the file.

Run your Python script. The audio download for this interpretation of Beethoven's 4th Movement of the 9th Symphony should have a ~33 Mb MP3 file with the video's title available locally. It'll probably be somewhat slow, so go make yourself some tea.

As you can see, it is possible to pass optional parameters to youtube-dl (which will also be available as a standalone CLI program outside the script). One of its capabilities is [downloading a series of videos from a playlist URL](https://github.com/ytdl-org/youtube-dl#video-selection). If you are more interested, you can read their documentation. I'll keep usage more trivial throughout this tutorial.

## How to Trim the Downloaded File

With the file downloaded, we're now going to arbitrarily slice it locally (you might have considered whether it is possible to simply download a clip from YouTube. All reliable methods I've found will essentially boil down to downloading the whole and then editing locally). For that we'll use the [pydub library](https://github.com/jiaaro/pydub). You can install it like this:

    pip install pydub

This is a pretty nice library that enables you to completely manipulate the audio, reducing or boosting volume at certain intervals, repeating clips, and so on. For now, we're just interested in trimming.

In order to trim our downloaded file, we'll have to get the filename of our newly downloaded MP3, convert the start and end points of our desired audio interval from 'hours:minutes:seconds' to milliseconds, and finally use `pydub` to slice our audio file.

### How to get the file name

Unfortunately, the `.download()` method won't return our generated filename, which we also won't have access to since we're just passing the URL as a parameter. But we have Python and this is a fantastic tool.

We know that we are looking for an `.mp3` file which was generated just before our file name lookup operation (Python is single-threaded and will execute code synchronously by default). We'll get the name of our most recent MP3 in the script directory, and that's gonna be our file.

We can perform this operation by listing all `.mp3` files in the local directory, collecting their timestamps as integers (which means time in milliseconds counted from a given date in the past. This means that the higher the value, the further in time the file was created.), and getting the file with the highest value.

For this we'll need the modules `glob` to navigate the directory and `os` to get timestamp information, both available natively.

    import glob
    import os
    
    def newest_mp3_filename():
        # lists all mp3s in local directory
        list_of_mp3s = glob.glob('./*.mp3')
        # returns mp3 with highest timestamp value
        return max(list_of_mp3s, key = os.path.getctime)
    

### How to get HH:MM:SS as milliseconds

Once we slice our file, `pydub` will expect time intervals expressed in milliseconds. But for we humans, calculating the exact moment in milliseconds every time we want to trim a video would be pretty annoying, so we'll respectfully ask the computer to do it for us.

Our input is going to be a string in the **HH:MM:SS** format. This works well if we want to trim a video longer than one hour, but most of the time we'll just want to get the time interval from a minute:second interval to another. So we have to take this into consideration as well.

A millisecond is 1/1000 of a second, a minute is 60 seconds, and an hour is 60 minutes. So we have to get the value for hours, then for minutes, then for seconds, perform the millisecond conversion on each, and then sum the parts to reach the result.

    def get_video_time_in_ms(video_timestamp):
        vt_split = video_timestamp.split(":")
        if (len(vt_split) == 3): # if in HH:MM:SS format
            hours = int(vt_split[0]) * 60 * 60 * 1000
            minutes = int(vt_split[1]) * 60 * 1000
            seconds = int(vt_split[2]) * 1000
        else: # MM:SS format
            hours = 0
            minutes = int(vt_split[0]) * 60 * 1000
            seconds = int(vt_split[1]) * 1000
        # time point in miliseconds
        return hours + minutes + seconds
    

### How to Get the Trimmed Audio

We'll now read our MP3 as a `pydub` object and slice our desired interval. The syntax is exactly the same as slicing operations on strings and arrays, but instead of an index for an element we'll use milliseconds for specific instants within the audio.

    def get_trimmed(mp3_filename, initial, final = ""):
        if (not mp3_filename):
            # raise an error to immediately halt program execution
            raise Exception("No MP3 found in local directory.")
        # reads mp3 as a PyDub object
        sound = AudioSegment.from_mp3(mp3_filename)
        t0 = get_video_time_in_ms(initial)
        print("Beginning trimming process for file ", mp3_filename, ".\n")
        print("Starting from ", initial, "...")
        if (len(final) > 0):
            print("...up to ", final, ".\n")
            t1 = get_video_time_in_ms(final)
            return sound[t0:t1] # t0 up to t1
        return sound[t0:] # t0 up to the end
    

## How to Put it All Together

> Alle Menschen werden Brüder,  
> Wo dein sanfter Flügel weilt.  
> \-- Friedrich Schiller

In case you were wondering, the previous fragment translates to "All men shall become brothers, wherever your gentle wings hover". It's a fragment of _Ode to Joy_, a poem by Friedrich Schiller, which serves as most of the lyrics to the choral parts of the 4th Movement.

This is the most famous fragment of the most famous movement of the most famous Beethoven symphony. Whoever you are, whenever and however you were raised, you are very likely to recognize this piece.

We'll now put together what we have done. We'll download the audio from YouTube, slice the _Ode to Joy_ choral (from `9:51` to `14:04`), and save it as `<filename> - TRIM.mp3`.

If you have followed the tutorial correctly, update your `main()` function to execute each step in a way that'll leave you with the full MP3 and the trimmed version of it as files available in the directory you'll be running the script from. Don't forget to run the `main()` function at the end of the script.

    def main():
        yt_url = "https://www.youtube.com/watch?v=8OAPLk20epo"
        download_audio(yt_url)
        initial = "9:51"
        final = "14:04"
        filename = newest_mp3_filename()
        trimmed_file = get_trimmed(filename, initial, final)
        trimmed_filename = "".join([filename.split(".mp3")[0], "- TRIM.mp3"])
        print("Process concluded successfully. Saving trimmed file as ", trimmed_filename)
        # saves file with newer filename
        trimmed_file.export(trimmed_filename, format="mp3")
    

## How to Add User Interaction Directly from the CLI

For this part we'll need the `sys` Python module, which reads input passed from the command line (among other things). We'll simply update the variables in the `main()` function to read input from the CLI instead of the currently hard-coded data.

ARGV reads input sequentially as an array, starting from index 1 (0 represents the running Python script name). We'll set it up to read a URL as the first argument, then (optional) initial and final trimming instants.

    import sys
    
    def main():
        if (not len(sys.argv) > 1):
            print("Please insert a multimedia-platform URL supported by youtube-dl as your first argument.")
            return
        yt_url = sys.argv[1]
        download_audio(yt_url)
        if (not len(sys.argv > 2)): # exit if no instants as args
            return
        initial = sys.argv[2]
        final = ""
        if (sys.argv[3]):
            final = sys.argv[3]
        filename = newest_mp3_filename()
        trimmed_file = get_trimmed(filename, initial, final)
        trimmed_filename = "".join([filename.split(".mp3")[0], "- TRIM.mp3"])
        print("Process concluded successfully. Saving trimmed file as ", trimmed_filename)
        # saves file with newer filename
        trimmed_file.export(trimmed_filename, format="mp3")
    

Run the file to test it. Remember to update the script name to the same one that's on your machine.

    python ytauddown.py https://www.youtube.com/watch?v=8OAPLk20epo 9:51 14:04
    

## Final Script

This is the final version with everything put together. Note that the comments on modules are related only to what we're using them for and that the `main()` function is being invoked at the last line.

    import youtube_dl # client to download from many multimedia portals
    import glob # directory operations
    import os # interface to os-provided info on files
    import sys # interface to command line
    from pydub import AudioSegment # only audio operations
    
    def newest_mp3_filename():
        # lists all mp3s in local directory
        list_of_mp3s = glob.glob('./*.mp3')
        # returns mp3 with highest timestamp value
        return max(list_of_mp3s, key = os.path.getctime)
    
    def get_video_time_in_ms(video_timestamp):
        vt_split = video_timestamp.split(":")
        if (len(vt_split) == 3): # if in HH:MM:SS format
            hours = int(vt_split[0]) * 60 * 60 * 1000
            minutes = int(vt_split[1]) * 60 * 1000
            seconds = int(vt_split[2]) * 1000
        else: # MM:SS format
            hours = 0
            minutes = int(vt_split[0]) * 60 * 1000
            seconds = int(vt_split[1]) * 1000
        # time point in miliseconds
        return hours + minutes + seconds
    
    def get_trimmed(mp3_filename, initial, final = ""):
        if (not mp3_filename):
            # raise an error to immediately halt program execution
            raise Exception("No MP3 found in local directory.")
        # reads mp3 as a PyDub object
        sound = AudioSegment.from_mp3(mp3_filename)
        t0 = get_video_time_in_ms(initial)
        print("Beginning trimming process for file ", mp3_filename, ".\n")
        print("Starting from ", initial, "...")
        if (len(final) > 0):
            print("...up to ", final, ".\n")
            t1 = get_video_time_in_ms(final)
            return sound[t0:t1] # t0 up to t1
        return sound[t0:] # t0 up to the end
    
    
    
    # downloads yt_url to the same directory from which the script runs
    def download_audio(yt_url):
        ydl_opts = {
            'format': 'bestaudio/best',
            'postprocessors': [{
                'key': 'FFmpegExtractAudio',
                'preferredcodec': 'mp3',
                'preferredquality': '192',
            }],
        }
        with youtube_dl.YoutubeDL(ydl_opts) as ydl:
            ydl.download([yt_url])
    
    def main():
        if (not len(sys.argv) > 1):
            print("Please insert a multimedia-platform URL supported by youtube-dl as your first argument.")
            return
        yt_url = sys.argv[1]
        download_audio(yt_url)
        if (not len(sys.argv > 2)): # exit if no instants as args
            return
        initial = sys.argv[2]
        final = ""
        if (sys.argv[3]):
            final = sys.argv[3]
        filename = newest_mp3_filename()
        trimmed_file = get_trimmed(filename, initial, final)
        trimmed_filename = "".join([filename.split(".mp3")[0], "- TRIM.mp3"])
        print("Process concluded successfully. Saving trimmed file as ", trimmed_filename)
        # saves file with newer filename
        trimmed_file.export(trimmed_filename, format="mp3")
    
    # example usage:
    # python ytauddown.py https://www.youtube.com/watch?v=8OAPLk20epo 9:51 14:04
    main()
    

## Suggested Exercises

1.  Detect whether the first input is a valid URL or not. Take a look at Python RegEx if you don't know where to start.
2.  Detect whether the second and third inputs are in the valid format (hours:minutes:seconds **OR** minutes:seconds).
3.  Add an option to rename the MP3 file directly from the CLI. Remember that ARGV arguments are executed in order.
4.  Refactor this script in order to interact with its functionality using a GUI. Can be either a web or local app, your choice.

## Final Considerations

I hope you'll have fun with this project and put it to good use.

Remember that making a living as an artist is pretty hard, especially for the majority without corporate backing. Remember to support the artists whose work you enjoy whenever you can and also remember to support open-source software.

___

___

Learn to code for free. freeCodeCamp's open source curriculum has helped more than 40,000 people get jobs as developers. [Get started](https://www.freecodecamp.org/learn/)
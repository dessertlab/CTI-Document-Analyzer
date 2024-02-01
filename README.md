# CTI-Document-Analyzer

CTI-Document-Analyzer is a tool for automatically extracting ATT&CK Techniques from CTIs

## Usage

### Installing requirements

To use CTI-Document-Analyzer you must install Python requirements run:

```
python3 -m pip install -r requirements.txt 
```

The models required for operation are provided in [figshare repo](https://figshare.com/articles/software/Models_for_CTI-Document-Analyzer/25125320), please download it into the `models/data` folder.

### Ways of use

The framework is provided with the `use_pipeline.py`. It can be used by specifying in the `-path` option the folder where all the documents are to be analyzed (which must be provided in `.html` or `.pdf` format)

```
python3 use_pipeline.py -path [FOLDER] 
```

In this case the results will be available into the `output/` folder.

Moreover, 3 possible text chunking modes could be selected by specifying it with the option `-scraper` :

- Adjacent clustering (default)
- Sentence splitting
- Paragraph splitting

More information could be retrieved by running

```
python3 use_pipeline.py -h 
```

```
usage: CTI Document Analyzer [-h] -path PATH [-so | -po]
                             [-scraper {semantic,naive,paragraph}]
                             [-summarize] [-tfv]

It retieves ATT&CK Techniques from the document given in input using multiple
DL-Models

options:
  -h, --help            
  -path PATH            Path of CTRs (if used in scrape only mode/default
                        mode), or path of CTI scraped (previous output
                        provided from so-mode) if used in predict only mode
  -so, --scrape-only    uses the script only as a scraper and chunker for
                        CTRs.
  -po, --predict-only   uses the script only for prediction, the output of
                        scrape-only must be provided
  -scraper {semantic,naive,paragraph}
                        What chunker should be used
  -summarize            Chose if should be provided the summarization of
                        scraped paragraph
  -tfv, --tf-verbose    Enable Tensorflow/Torch/CUDA Warming and info

The input should be provided into a folder in .pdf or .html format

```

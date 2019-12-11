import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import './Home.css';
import Page from './Pagination';
import Header from './Header'

const useStyles = makeStyles(theme => ({
  root: {
    width: '90vw',
    marginTop: '10px',
    backgroundColor: theme.palette.background.paper,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    height: theme.spacing(6),
    float: 'left',
  },
}));


export default function InsetList(props) {
  const classes = useStyles();
  
  const [IsLoaded, setIsLoaded] = useState(false);
  
  const [Items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?page=" + activePage + "&query=" + SearchInput)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setItems(result.hits);
        // alert(Items.length)
      },
      (error) => {
        setItems([]);
        // SetIsLoaded(false);
      }
    );
  })

  function items (Items) {
    return Items.map(function (Item) {
      if (Item.title === null){
        return '';
      }
      let authorUrl = "https://news.ycombinator.com/user?id=" + Item.author;
      let IdUrl = "https://news.ycombinator.com/item?id=16582136" + Item.objectID;
        return (
          <article className="Story">
            <div className="Story_container">
              <div className="Story_data">
                <div className="Story_title">
                  <a href={Item.url}>
                    <span>{Item.title}</span>
                  </a>
                  <a href={Item.url} className="Story_link">
                    ({Item.url})
                  </a>
                </div>
                <div className="Story_meta">
                  <span>
                    <a href={Item.url}>
                      {Item.points}
                    </a>
                  </span>
                  <span className="Story_separator">|</span>
                  <span>
                    <a href={authorUrl}>
                      <span>
                        {Item.author}
                      </span>
                    </a>
                  </span>
                  <span className="Story_separator">|</span>
                  <span>
                    <a href={IdUrl}>
                      {Item.num_comments} comments
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </article>
        )
    })
  }

  const [activePage, setActivePage] = React.useState('1');
  const [SearchInput, setSearchInput] = React.useState('');

  function OnClick (p) {
    setActivePage(p);
  }

  function OnChange(e) {
    // alert(e.target.value);
    setSearchInput(e.target.value);
  }

  var UserName = localStorage.getItem('UserName') || 'Hacker News'
  
  return (
    <div>
      <Header UserName={UserName} SearchInput={SearchInput} OnChange={OnChange} />
      <List component="nav" className={classes.root} aria-label="contacts">
        {items(Items)}
      </List>
      <Page pageNo={activePage} onChange={OnClick} />
    </div>
  );
}
